const mongoose = require('mongoose');

const assetSchema = mongoose.Schema({
    asset_code: String,
    asset_issuer: String
}, { collection: 'assets' });

const Asset = mongoose.model('Asset', assetSchema);

function createNewAsset(code, issuer, callback) {
    return new Promise((resolve, reject) => {
        Asset.findOne({ asset_code: code, asset_issuer: issuer}).then(info => {
            if (info == null) {
                let newAsset = new Asset({
                    asset_code: code,
                    asset_issuer: issuer
                });
                newAsset.save().then(done => {
                    return callback ? callback(null, done) : resolve(done);
                })
            } else {
                return callback ? callback('Error: Asset exists!') : reject('Error: Asset exists!')
            }
        }).catch(error => {
            return callback ? callback(error) : reject(error);
        });
    });
}

function getAllAssets(callback) {
    return new Promise((resolve, reject) => {
        Asset.find().then(data => {
            return callback ? callback(null, data) : resolve(data);
        }).catch(error => {
            return callback ? callback(error) : reject(error);
        });
    });
}

module.exports = Asset;
module.exports.createNewAsset = createNewAsset;
module.exports.getAllAssets = getAllAssets;
