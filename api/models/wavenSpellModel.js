'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Resource = mongoose.model('Resource');

var spellSchema = new Schema({
    name: {
        type: String,,
        default: ""
    },
    iconUrl: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    element: {
        type: Schema.Types.ObjectId,
        ref: 'Element'
    },
    cost: {
        type: Number,
        required: true,
        default: 0
    },
    range: {
        type: Number,
        default: null
    },
    line: {
        type: Boolean,
        default: false
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

spellSchema.pre('findOne', function(next) {
    this.populate({
        path: 'element',
        model: 'Element'
    });
    next();
});

module.export = mongoose.model('Spell', spellSchema);
    
