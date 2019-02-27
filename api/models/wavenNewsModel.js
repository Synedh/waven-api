'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
    author: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: null
    },
    tags: {
        type: [String],
        default: []
    },
    categorie: {
        type: String,
        default: ""
    }
});

module.export = mongoose.model('News', newsSchema);
