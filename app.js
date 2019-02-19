const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

mongoose.connect('mongodb://onejohi:lisanjeri1@ds341605.mlab.com:41605/raisedemo', { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', 'views');
app.set('view engine', 'pug');

app.use('/', require('./routes/index'));
// handles transactions between assets/lumens
app.use('/transact', require('./routes/transact'));
// handles authentication
app.use('/auth', require('./routes/auth'));
// handles assets
app.use('/assets', require('./routes/assets'));
// handles Stellar accounts and our own user accounts
app.use('/accounts', require('./routes/accounts'));

app.listen(process.env.PORT || 4444, () => {
    console.log('Server running on port 4444');
});

function ensureToken(req, res, next) {
    const token = req.headers["authorization"].split(" ")[1];
    if (token == undefined || token == null) {
        res.sendStatus(403);
    } else {
        jwt.verify(token, 'raise_secret', (err, result) => {
            if (err) { res.sendStatus(403); }
            else { next(); }
        });
    }
}
