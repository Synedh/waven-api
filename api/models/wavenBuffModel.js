'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var buffSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: 'Enter the name of the buff'
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

buffSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/buffs/' + this.id;
});

module.export = mongoose.model('Buff', buffSchema);
    