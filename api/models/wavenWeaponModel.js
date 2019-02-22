'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weaponSchema = new Schema({
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
    },
    weaponType: {
        type: Schema.Types.ObjectId,
        ref: 'WeaponType'
    }
});

weaponSchema.pre('find', function(next) {
    this.populate({
        path: 'weaponType',
        model: 'WeaponType'
    });
    next();
});

module.export = mongoose.model('Weapon', weaponSchema);
