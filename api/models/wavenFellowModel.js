'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fellowSchema = new Schema({
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
    transfer: {
        type: Schema.Types.ObjectId,
        ref: 'Transfer'
    },
    cost: {
        type: [[Schema.Types.ObjectId, Number]],
        rel: 'Element'
    },
    life: {
        type: Number
    },
    damage: {
        type: Number
    },
    movement: {
        type: Number
    }
});

module.export = mongoose.model('Fellow', fellowSchema);
    