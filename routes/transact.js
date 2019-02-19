const express = require('express');
const Stellar = require('stellar-sdk');
Stellar.Network.useTestNetwork();
const server = new Stellar.Server('https://horizon-testnet.stellar.org')
const router = express.Router();

// Send native Lumens from one account to another
router.post('/send', (req, res) => {
    let reciever = req.body.reciever;
    let sourceKeys = Stellar.Keypair.fromSecret(req.body.private_key);
    const amount = req.body.amount;

    server.loadAccount(reciever).catch(Stellar.NotFoundError, () => {
        throw new Error("Reciever account doesn't exist!");
    }).then(() => {
        return server.loadAccount(sourceKeys.publicKey());
    }).then(sourceAccount => {
        let transaction = new Stellar.TransactionBuilder(sourceAccount).addOperation(Stellar.Operation.payment({
            destination: reciever,
            asset: Stellar.Asset.native(),
            amount: amount.toString(),
        })).setTimeout(30).build();

        transaction.sign(sourceKeys);
        return server.submitTransaction(transaction);
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    });
});

// Send SPECIFICALLY IHUBTOKENS from any account to another
router.post('/send_ihubtokens', (req, res) => {
    const reciever = req.body.reciever;
    const sourceKeys = Stellar.Keypair.fromSecret(req.body.private_key);
    const asset_issuer = req.body.asset_issuer;
    const amount = req.body.amount;

    const assetR = new Stellar.Asset('IHUBTOKEN', asset_issuer);

    server.loadAccount(reciever).catch(Stellar.NotFoundError, (error) => {
        console.log(error);
    }).then(() => {
        return server.loadAccount(sourceKeys.publicKey());
    }).then((sourceAccount) => {
        let transaction = new Stellar.TransactionBuilder(sourceAccount).addOperation(Stellar.Operation.payment({
            destination: reciever,
            asset: assetR,
            amount: amount,
        })).setTimeout(30).build();

        transaction.sign(sourceKeys);
        return server.submitTransaction(transaction);
    }).then(result => {
        res.json({ ok: true, data: result });
    }).catch(err => {
        res.json({
            ok: false,
            message: "Account unauthorized, Do you trust this account?."
        });
    });
    
});

// DEPRECATED
// create_trust shifted to accounts, create_trustline
router.post('/create_trust', (req, res) => {
    const accountKeys = Stellar.Keypair.fromSecret(req.body.private_key);
    const asset_issuer = req.body.asset_issuer;
    const assetR = new Stellar.Asset('IHUBTOKEN', asset_issuer);

    server.loadAccount(accountKeys.publicKey()).then((reciever) => {
        const transation = new Stellar.TransactionBuilder(reciever).addOperation(Stellar.Operation.changeTrust({
            asset: assetR
        })).setTimeout(30).build();
        transation.sign(accountKeys);
        return server.submitTransaction(transation);
    }).then((result) => {
        res.json({ ok: true, data: result });
    }).catch((err) => {
        console.log(err);
    });

});

module.exports = router;