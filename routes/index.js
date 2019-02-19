const express = require('express');
const Stellar = require('stellar-sdk');
const request = require('request');
const Account = require('../models/account');
const router = express.Router();
const server = new Stellar.Server('https://horizon-testnet.stellar.org');

router.get('/', (req, res) => {
    res.sendFile('index.html');
});

// Deletes
router.get('/purgedb', (req, res) => {
    Account.purgeDatabase().then(status => {
        if (status === true) {
            res.json({ ok: true, message: "Database successfully refeshed."});
        } else {
            res.json({ ok: false, message: "An error occured"});
        }
    })
})

// DEPRECATED: creates a basic account and uses stellar bot to top up account with 10,000 Lumens
router.get('/create_account', (req, res, next) => {
    const pair = Stellar.Keypair.random();

    // top up account with some lumen
    request.get({
        url: 'https://friendbot.stellar.org',
        qs: { addr: pair.publicKey() },
        json: true
    }, (err, response, body) => {
        if (err) { console.log(err); next(); }
        else if (response.statusCode != 200) {
            console.log(response);
        } else {
            // return private key and public key of the account to user
            res.json({
                ok: true,
                public_key: pair.publicKey(),
                private_key: pair.secret()
            });
        }
    });
});

// Get account balance using public_key
router.get('/balance/:public_key', (req, res, next) => {
    const key = req.params.public_key;
    let balances = [];

    server.loadAccount(key).then(account => {
        account.balances.forEach(bal => {
            balances.push(bal);
        });
        res.json({
            ok: true,
            balances: balances
        });
    }).catch(err => {
        console.log(err);
        next();
    });
});

// Get transactions made by an account using the public key
router.get('/transactions/:public_key', (req, res) => {
    const publicKey = req.params.public_key;

    server.transactions().forAccount(publicKey).call().then(r => {
        res.json(r);
    })
});

module.exports = router;