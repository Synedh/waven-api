'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weaponSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the weapon'
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
},
{
    toJSON: { 
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
});

weaponSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/weapons/' + this.id;
});

module.export = mongoose.model('Weapon', weaponSchema);
