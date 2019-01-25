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

buffSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/buffs/' + this.id;
});

module.export = mongoose.model('Buff', buffSchema);
    