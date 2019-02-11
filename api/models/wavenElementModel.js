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
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.export = mongoose.model('Element', elementSchema);
