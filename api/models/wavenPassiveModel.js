'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passiveSchema = new Schema({
    name: {
        type: String
    },
    iconUrl: {
        type: String
    },
    description: {
        type: String
    },
});

module.export = mongoose.model('Passive', passiveSchema);
