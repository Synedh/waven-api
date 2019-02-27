'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transferSchema = new Schema({
    name: {
        type: String,
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
});

module.export = mongoose.model('Transfer', transferSchema);
    