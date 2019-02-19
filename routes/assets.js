const express = require('express');
const Stellar = require('stellar-sdk');
const server = new Stellar.Server('https://horizon-testnet.stellar.org');
const Account = require('../models/account');
const Asset = require('../models/assets');
const router = express.Router();
Stellar.Network.useTestNetwork();

// DEPRECATED: Issue an account with IHUB tokens, this functionality has been moded to accounts
// A new issuer account is created and issued with tokens simulataneously, this route can be safely deleted
router.post('/issue', (req, res) => {
    const issuer = Stellar.Keypair.fromSecret(req.body.issuer);
    const recipient = Stellar.Keypair.fromSecret(req.body.recipient);
    const amount = req.body.amount;

    const iHubToken = new Stellar.Asset('IHUBTOKEN', issuer.publicKey());

    server.loadAccount(recipient.publicKey()).then((reciever => {
        const transaction = new Stellar.TransactionBuilder(reciever).addOperation(Stellar.Operation.changeTrust({
            asset: iHubToken
        })).setTimeout(30).build();

        transaction.sign(recipient);
        return server.submitTransaction(transaction);
    })).then(() => {
        return server.loadAccount(issuer.publicKey());
    }).then(sender => {
        const transaction = new Stellar.TransactionBuilder(sender).addOperation(Stellar.Operation.payment({
            destination: recipient.publicKey(),
            asset: iHubToken,
            amount: amount
        })).setTimeout(30).build();
        transaction.sign(issuer);
        return server.submitTransaction(transaction);
    }).catch(error => {
        console.log("Error: " + error)
    }).then(data => {
        res.json({
            ok: true,
            data: data
        });
    });

});

// DEPRECATED: New allow trust functionality has been moved to accounts where an account
// trusts another to allow acceptance of the assets, this route can be removed
// Allows trust of assets issued by my account
router.post('/allow_trust', (req, res) => {

    const private_key = req.body.private_key;
    const recipient = new String(req.body.recipient)
    
    Account.allowTrust(private_key, recipient , (data) => {
        res.json({ ok: true, data: data });
    });
});

router.get('/assets', (req, res) => {
    Asset.getAllAssets().then(data => {
        res.json({ ok: true, data: data });
    }).catch(error => {
        res.json({ ok: false, message: error });
    })
});

module.exports = router;