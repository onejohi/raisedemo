const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const request = require('request');
const Stellar = require('stellar-sdk');
const Asset = require('./assets');
const server = new Stellar.Server('https://horizon-testnet.stellar.org');

const accountSchema = mongoose.Schema({
    account_id: String,
    email: String,
    password: String,
    created_on: Date
}, { collection: 'intro_accounts'});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;

// Account Methods

// Create an issuer account
function createIssuerAccount(secret, userInfo, balance, assetBalance, callback) {
    
    return new Promise((resolve, reject) => {
        const pair = Stellar.Keypair.fromSecret(secret);

        // new account should have new keys
        const destinationPair = Stellar.Keypair.random();

        const iHubToken = new Stellar.Asset('IHUBTOKEN', pair.publicKey());

        // Create a new asset on our DB
        Asset.createNewAsset('IHUBTOKEN', pair.publicKey()).then(data => {
            console.log(data); // Should remove this
        }).catch(error => {
            console.log(error);
        });

        server.loadAccount(pair.publicKey()).then((account) => {
            const transaction = new Stellar.TransactionBuilder(account).addOperation(Stellar.Operation.createAccount({
                destination: destinationPair.publicKey(),
                startingBalance: balance
            })).setTimeout(30).build();
            transaction.sign(pair);
            return server.submitTransaction(transaction);
        }).then(() => {
            return server.loadAccount(destinationPair.publicKey());
        }).then(reciever => {
            const transaction = new Stellar.TransactionBuilder(reciever).addOperation(Stellar.Operation.changeTrust({
                asset: iHubToken
            })).setTimeout(30).build(); // .addOperation(Stellar.Operation.setOptions({ setFlags: Stellar.AuthRequiredFlag }))
            transaction.sign(destinationPair);
            return server.submitTransaction(transaction);
        }).then(() => {
            return server.loadAccount(pair.publicKey());
        }).then(account => {
            const transaction = new Stellar.TransactionBuilder(account).addOperation(Stellar.Operation.payment({
                destination: destinationPair.publicKey(),
                asset: iHubToken,
                amount: assetBalance
            })).setTimeout(30).build();
            transaction.sign(pair);
            return server.submitTransaction(transaction);
        }).then((done) => {
            // console.log(done);
            console.log('Hello...');
            createNewAccount(destinationPair.publicKey(), userInfo);
            return callback ? callback(null, {
                key: destinationPair.secret(),
                account: destinationPair.publicKey()
            }) : resolve({
                key: destinationPair.secret(),
                account: destinationPair.publicKey()
            });
        }).catch((error) => {
            return callback ? callback(error) : reject(error);
        });
    });

    // Create the new account in the DB.
    function createNewAccount(id, userInfo) {
        createAccount({
            account_id: id,
            email: userInfo.email,
            password: userInfo.password
        }).then(data => {
            // console.log(data);
        }).catch(err => {
            console.log(err);
        });
    }

}

// Create an account in our database
function createAccount (info, callback) {
    return new Promise((resolve, reject) => {
        let newAccount = new Account({
            account_id: info.account_id,
            email: info.email,
            password: info.password,
            created_on: Date.now()
        });
        newAccount.save((err, newacc) => {
            if (err) { return callback ? callback(err) : reject(err) }
            else {
                return callback ? callback(null, newacc) : resolve(newacc)
            }
        });
    })
}

// Use stellar bot to top up new account with 10,000 Lumens
function topUpAccount (publicKey, callback) {
    return new Promise((resolve, reject) => {
        request.get({
            url: 'https://friendbot.stellar.org',
            qs: { addr: publicKey },
            json: true
        }, (err, response, body) => {
            if (err) { return callback ? callback(err) : reject(err) }
            else if (response.statusCode == 200) {
                return callback ? callback(null, body) : resolve(body)
            }
        });
    });
}

function signAccount (info, callback) {
    return new Promise((resolve, reject) => {
        jwt.sign(info, 'raise_secret', (err, token) => {
            if (err) { return callback ? callback(err) : reject(err) }
            else { return callback ? callback(null, token) : resolve(token) }
        });
    });
}

// DEPRECATED
// sets the auth flag required to true, did not work
// Should remove this function.
function setAuthRequired(private_key, callback) {
    return new Promise((resolve, reject) => {
        const keyPair = Stellar.Keypair.fromSecret(private_key);
        // console.log('64:' + keyPair);

        server.loadAccount((keyPair.publicKey()), (issuerAcc) => {
            const transaction = new Stellar.TransactionBuilder(issuerAcc).addOperation(Stellar.Operation.setOptions({
                setFlags: Stellar.AuthRequiredFlag
            })).setTimeout(30).build();
            transaction.sign(keyPair);
            return server.submitTransaction(transaction);
        }).then((done) => {
            console.log(done);
            return callback ? callback(null, true): resolve(done);
        }).catch((error) => {
            console.log('76: ' + error);
            return callback ? callback(error) : reject(error);
        });
    });
}

function checkTrust(info, callback) {
    const assetCode = info.assetCode;
    const assetIssuer = info.assetIssuer;
    const accountId = info.accountId;
    
    return new Promise((resolve, reject) => {
        server.loadAccount(accountId).then((account) => {
            const trusted = account.balances.some((balance) => {
                return balance.asset_code === assetCode && balance.asset_issuer === assetIssuer;
            });
            return callback ? callback(null, trusted) : resolve(trusted);
        }).catch((err) => {
            return callback ? callback(err) : reject(err);
        });
    });
}

// allowTrust operation between two accounts
function AllowTrust(private_key, recipient, callback) {
    const issuer = Stellar.Keypair.fromSecret(private_key);
    return new Promise((resolve, reject) => {
        server.loadAccount(issuer.publicKey()).then((account) => {
            const transaction = new Stellar.TransactionBuilder(account).addOperation(
                Stellar.Operation.allowTrust({
                    trustor: recipient,
                    type: "IHUBTOKEN",
                    authorize: true,
                    source: issuer.publicKey()
            })).setTimeout(30).build();
            transaction.sign(issuer);
            return server.submitTransaction(transaction);
        }).then((done) => {
            return callback ? callback(done) : resolve(done);
        }).catch(error => {
            return callback ? callback(error) : reject(error);
        });
    });
}

// changeTrust operation between account and an asset
function createTrust(key, asset, callback) {
    const pair = Stellar.Keypair.fromSecret(key);
    return new Promise((resolve, reject) => {
        server.loadAccount(pair.publicKey()).then(receiver => {
            const transaction = new Stellar.TransactionBuilder(receiver).addOperation(Stellar.Operation.changeTrust({
                asset: asset
            })).setTimeout(30).build();
            transaction.sign(pair);
            return server.submitTransaction(transaction);
        }).then(tx => {
            return callback ? callback(null, tx) : resolve(tx);
        }).catch(error => {
            return callback ? callback(error) : reject(error);
        });
    });
}

// This function clears all accounts from DB to start afresh
// Only use this function during development.
function purgeDatabase(callback) {
    return new Promise((resolve, reject) => {
        Account.find((err, data) => {
            // list all user IDs and delete them
            const ids = [];
            data.forEach(account => {
                ids.push(account._id.toString());
            });

            ids.forEach(id => {
                Account.findByIdAndDelete(id).then(resolved => {
                    // nothing happens
                }).catch(rejected => {
                    return callback ? callback(false) : reject(false); // rejects with false
                })
            });
            
            return callback ? callback(null, true) : resolve(true); // resolves to true

        });
    });
}

// Export all the methods.
module.exports.createAccount = createAccount;
module.exports.topUpAccount = topUpAccount;
module.exports.signAccount = signAccount;
module.exports.setAuthRequired = setAuthRequired;
module.exports.checkTrust = checkTrust;
module.exports.AllowTrust = AllowTrust;
module.exports.purgeDatabase = purgeDatabase;
module.exports.createIssuerAccount = createIssuerAccount;
module.exports.createTrust = createTrust;