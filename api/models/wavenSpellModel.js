'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var spellSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the spell'
    },
    iconUrl: {
        type: String
    },
    description: {
        type: String
    },
    element: {
        type: Schema.Types.ObjectId,
        ref: 'Element'
    },
    cost: {
        type: Number,
        required: true
    },
    stockpile: {
        type: Number,
        default: 0
    },
    resources: {
        type: [Schema.Types.ObjectId],
        ref: 'Resource',
        default: []
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

spellSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/spells/' + this.id;
});

module.export = mongoose.model('Spell', spellSchema);
    