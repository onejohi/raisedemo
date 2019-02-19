const express = require('express');
const Account = require('../models/account');
const Stellar = require('stellar-sdk');
const router = express.Router();
const server = new Stellar.Server('https://horizon-testnet.stellar.org');

// Create new Issuer, Specify the startingBalance, the assetBalance and user information
router.post('/create_new_issuer', (req, res) => {
    const sourcePair = Stellar.Keypair.fromSecret(req.body.private_key);
    const balance = new String(req.body.balance);
    const assetBalance = req.body.assetBalance;
    const userInfo = {
        email: req.body.email,
        password: req.body.password
    }

    Account.createIssuerAccount(sourcePair.secret(), userInfo, balance, assetBalance).then(data => {
        // returns login information, and account keys.
        res.json({ ok: true, data: data });
    }).catch(error => {
        console.log(error);
        res.json({ ok: false, message: "You cannot create a new issuing account." });
    });
});

// Get's details of an account using it's private_key
router.post('/get_details', (req, res) => {
    const sourcePair = Stellar.Keypair.fromSecret(req.body.private_key);

    server.loadAccount(sourcePair.publicKey()).then(account => {
        res.json(account);
    }).catch(error => {
        console.log(error);
    });
    
});

// create's a trustline between an asset and the account
router.post('/create_trustline', (req, res) => {
    const destinationPair = Stellar.Keypair.fromSecret(req.body.private_key);
    const asset = new Stellar.Asset(new String(req.body.asset_code), new String(req.body.asset_issuer));

    Account.createTrust(destinationPair.secret(), asset).then(data => {
        res.json({ ok: true, data: data });
    }).catch(err => {
        console.log(err);
        res.json({ ok: false, message: err });
    });
});

// allowTrust operation between an account, fails with a cannot read property length of undefined
router.post('/allow_trust', (req, res) => {
    
    Account.AllowTrust(req.body.private_key, req.body.recipient).then(data => {
        res.json({ ok: true, data: data });
    }).catch(err => {
        res.json({ ok: true, message: err });
    });
});

module.exports = router;