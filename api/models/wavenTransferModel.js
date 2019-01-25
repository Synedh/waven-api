'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transferSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the transfer'
    },
    iconUrl: {
        type: String
    },
    description: {
        type: String
    },
},
{
    toJSON: { 
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
});

transferSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/transfers/' + this.id;
});

module.export = mongoose.model('Transfer', transferSchema);
    