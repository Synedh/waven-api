'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passiveSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the passive'
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

passiveSchema.virtual('href').get(function () {
    return 'http://localhost:3000/passives/' + this.id;
});

module.export = mongoose.model('Passive', passiveSchema);