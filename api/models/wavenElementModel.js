'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var elementSchema = new Schema({
    name: {
        type: String,
    },
    iconUrl: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.export = mongoose.model('Element', elementSchema);
