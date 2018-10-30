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
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
    return 'http://localhost:3000/transfers/' + this.id;
});

module.export = mongoose.model('Transfer', transferSchema);
    