/*
    This is the auth file. All forms of authorizations are handled here.
*/

const express = require('express');
const Account = require('../models/account');
const Stellar = require('stellar-sdk');
const jwt = require('jsonwebtoken');
const router = express.Router();

// This route logs user's in using their email and password combination.
router.post('/login', (req, res) => {
    // Find Try to find a user with an email and password combination that matches
    // the request

    const email = req.body.email;
    const password = req.body.password;

    Account.findOne({ email: email, password: password }).then(data => {
        // If there is no account identified that matches the fields, return false
        if (data == null) {
            res.json({ ok: false, message: 'Account not identified.'});
        } else {
            // If a match is fount, then sign user using jwt
            jwt.sign({
                email: email,
                account_id: data.account_id
            }, 'raise_secret', (err, token) => {
                if (err) { console.log(err); } // if an error occurs, log it out to console
                else { res.json({ ok: true, token: token, account: data.account_id, key: null }); }
            });
        }
    });
});

// This route creates a new account and tops account with 10,000 Lumens.
router.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Account.findOne({ email: email }, (err, result) => {
        if (err) { console.log(err); }
        else if (result === null) {
            const pair = Stellar.Keypair.random();

            // top up new created account with lumen
            Account.topUpAccount(pair.publicKey()).then(tx => {
                // console.log('auth.js 37:' + tx);
            }).catch(err => {
                console.log(err);
            });

            // Create a new account to db
            Account.createAccount({ email: email, password: password, account_id: pair.publicKey() }).then(info => {

                // sign in account using jwt
                Account.signAccount({
                    account_id: pair.publicKey(),
                    email: email
                }).then(token => {
                    // return token, account public key and private key
                    res.json({
                        ok: true,
                        token: token,
                        account: pair.publicKey(),
                        key: pair.secret()
                    });
                }).catch(err => {
                    console.log(err);
                });

            }).catch(err => {
                console.log(err);
            });


        } else {
            res.json({ ok: false, message: "User already exists"});
        }
    });

});

module.exports = router;