'use strict';
var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

var weaponSchema = new Schema({
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
    },
    spells: {
        type: [Schema.Types.ObjectId],
        ref: 'Spell',
        default: []
    },
    passives: {
        type: [Schema.Types.ObjectId],
        ref: 'Passive',
        default: []
    },
    weaponSkins: {
        type: [Schema.Types.ObjectId],
        ref: 'WeaponSkin',
        default: []
    },
    life: {
        type: [Number],
        default: []
    },
    damage: {
        type: [Number],
        default: []
    },
    movement: {
        type: [Number],
        default: []
    }
});

weaponSchema.pre('find', function(next) {
    this.populate({
        path: 'spells',
        model: 'Spell'
    })
        .populate({
        path: 'passives',
        model: 'Passive'
    })
        .populate({
        path: 'weaponSkins',
        model: 'WeaponSkin'
    });
    next();
});

weaponSchema.pre('findOne', function(next) {
    this.populate({
        path: 'spells',
        model: 'Spell'
    })
        .populate({
        path: 'passives',
        model: 'Passive'
    })
        .populate({
        path: 'weaponSkins',
        model: 'WeaponSkin'
    });
    next();
});

module.export = mongoose.model('Weapon', weaponSchema);
    
