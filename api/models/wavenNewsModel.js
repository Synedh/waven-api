'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    name: {
        type: String
    },
    imageUrl: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    date: {
        type: Date
    },
    tags: {
        type: [String]
    },
    categorie: {
        type: String
    }
});

module.export = mongoose.model('News', newsSchema);
