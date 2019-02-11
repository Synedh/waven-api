'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var raceSchema = new Schema({
    name: {
        type: String
    },
    portraitUrl: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: [String],
    },
    description: {
        type: String,
    },
    weaponTypes: {
        type: [Schema.Types.ObjectId],
        ref: 'WeaponType'
    },
    spells: {
        type:  [Schema.Types.ObjectId],
        ref: 'Spell'
    }
});

module.export = mongoose.model('Race', raceSchema);
