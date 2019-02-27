'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var elementSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    iconUrl: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    }
});

module.export = mongoose.model('Element', elementSchema);
