'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var raceSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the race'
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
        required: 'Need a short description of the class'
    },
    weaponTypes: {
        type: [Schema.Types.ObjectId],
        ref: 'WeaponType'
    },
    spells: {
        type:  [Schema.Types.ObjectId],
        ref: 'Spell'
    }
},
{
    toJSON: { 
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
});

raceSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/classes/' + this.id;
});

module.export = mongoose.model('Race', raceSchema);
