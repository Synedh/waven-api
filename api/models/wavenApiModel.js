'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var raceSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the race'
    },
    portrait: {
        type: String,
    },
    image: {
        type: String,
    },
    background: {
        type: String,
    },
    tags: {
        type: [String],
        validate: [arrayLimit, '{PATH} exceeds the limit of 5']
    },
    description: {
        type: String,
        required: 'Need a short description of the race'
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
    return 'http://localhost:3000/classes/' + this.id;
});

function arrayLimit(val) {
    return val.length <= 5;
}

module.export = mongoose.model('Race', raceSchema);
