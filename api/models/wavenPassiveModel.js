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

passiveSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/passives/' + this.id;
});

module.export = mongoose.model('Passive', passiveSchema);
