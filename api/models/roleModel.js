'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    rule_get: {
        type: [String]
    },
    rule_post: {
        type: [String]
    },
    rule_put: {
        type: [String]
    },
    rule_delete: {
        type: [String]
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

roleSchema.virtual('href').get(function () {
    return 'http://waven-api.synedh.fr/roles/' + this.id;
});


module.export = mongoose.model('Role', roleSchema);
    