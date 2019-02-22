'use strict';
var mongoose = require('mongoose'),
    Schema  = mongoose.Schema;

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
    spells: {
        type: [Schema.Types.ObjectId],
        ref: 'Spell'
    },
    passives: {
        type: [Schema.Types.ObjectId],
        ref: 'Passive'
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

weaponTypeSchema.pre('findOne', function(next) {
    this.populate({
        path: 'spells',
        model: 'Spell'
    })
        .populate({
        path: 'passives',
        model: 'Passive'
    });
    next();
});

module.export = mongoose.model('WeaponType', weaponTypeSchema);
    
