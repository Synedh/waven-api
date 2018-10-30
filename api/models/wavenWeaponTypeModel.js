'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weaponTypeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the weapon type'
    },
    iconUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    passives: {
        type: [Schema.Types.ObjectId],
        rel: 'Passive'
    },
    spells: {
        type: [Schema.Types.ObjectId],
        rel:' Spell'
    },
    life: {
        type: Number,
    },
    damage: {
        type: Number,
    },
    movement: {
        type: Number,
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

weaponTypeSchema.virtual('href').get(function () {
    return 'http://localhost:3000/weaponTypes/' + this.id;
});

module.export = mongoose.model('WeaponType', weaponTypeSchema);
    