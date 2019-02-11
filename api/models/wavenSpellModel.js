'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Resource = mongoose.model('Resource');

var spellSchema = new Schema({
    name: {
        type: String
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
        type: [Resource.schema],
        default: []
    }
});

module.export = mongoose.model('Spell', spellSchema);
    