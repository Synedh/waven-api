'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the news'
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    date: {
        type: Date,
    },
    tags: {
        type: [String],
    },
    categorie: {
        type: String
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

newsSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/news/' + this.id;
});

module.export = mongoose.model('News', newsSchema);
