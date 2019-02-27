'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Resource = mongoose.model('Resource');

var fellowSchema = new Schema({
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
    transfers: {
        type: [Schema.Types.ObjectId],
        ref: 'Transfer',
        default: []
    },
    cost: {
        type: [Resource.schema],
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

fellowSchema.pre('findOne', function(next) {
    this.populate({
        path: 'spells',
        model: 'Spell'
    })
        .populate({
        path: 'passives',
        model: 'Passive'
    })
        .populate({
        path: 'transfer',
        model: 'Transfer'
    });
    next();
});

module.export = mongoose.model('Fellow', fellowSchema);