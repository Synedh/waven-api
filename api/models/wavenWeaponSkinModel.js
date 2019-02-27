'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weaponSkinSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    iconUrl: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
});

module.export = mongoose.model('WeaponSkin', weaponSkinSchema);
