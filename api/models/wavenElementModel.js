'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var elementSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the element'
    },
    iconUrl: {
        type: String,
        required: true
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

elementSchema.virtual('href').get(function () {
    return 'http://localhost:3000/elements/' + this.id;
});

module.export = mongoose.model('Element', elementSchema);
