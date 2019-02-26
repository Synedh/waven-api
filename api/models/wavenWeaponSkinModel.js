'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weaponSkinSchema = new Schema({
    name: {
        type: String
    },
    iconUrl: {
        type: String
    },
    imageUrl: {
        type: String
    },
    description: {
        type: String
    }
});

module.export = mongoose.model('WeaponSkin', weaponSkinSchema);
