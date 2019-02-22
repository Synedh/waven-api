'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Resource = mongoose.model('Resource');

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
    transfers: {
        type: [Schema.Types.ObjectId],
        ref: 'Transfer'
    },
    cost: {
        type: [Resource.schema],
        default: []
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