'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var raceSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    fullName: {
        type: String,
        default: ""
    },
    portraitUrl: {
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
    weapons: {
        type: [Schema.Types.ObjectId],
        ref: 'Weapon',
        default: []
    },
    spells: {
        type:  [Schema.Types.ObjectId],
        ref: 'Spell',
        default: []
    }
});

raceSchema.pre('findOne', function(next) {
    this.populate({
        path: 'spells',
        model: 'Spell'
    })
        .populate({
        path: 'weapons',
        model: 'Weapon'
    });
    next();
});

module.export = mongoose.model('Race', raceSchema);
