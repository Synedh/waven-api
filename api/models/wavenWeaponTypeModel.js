'use strict';
var mongoose = require('mongoose'),
    Schema  = mongoose.Schema,
    Passive = mongoose.model('Passive'),
    Spell   = mongoose.model('Spell');

var weaponTypeSchema = new Schema({
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
    passives: {
        type: [Passive.schema],
        default: []
    },
    spells: {
        type: [Spell.schema],
        default: []
    },
    life: {
        type: Number,
        default: 0
    },
    damage: {
        type: Number,
        default: 0
    },
    movement: {
        type: Number,
        default: 0
    }
});

module.export = mongoose.model('WeaponType', weaponTypeSchema);
    
