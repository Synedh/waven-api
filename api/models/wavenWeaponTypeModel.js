'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Passive = mongoose.model('Passive');

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
});

module.export = mongoose.model('WeaponType', weaponTypeSchema);
    