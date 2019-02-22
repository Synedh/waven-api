'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var raceSchema = new Schema({
    name: {
        type: String
    },
    fullName: {
        type: String
    },
    portraitUrl: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    weapons: {
        type: [Schema.Types.ObjectId],
        ref: 'Weapon'
    },
    spells: {
        type:  [Schema.Types.ObjectId],
        ref: 'Spell'
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
