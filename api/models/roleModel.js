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

roleSchema.methods.checkRole = function(method, endpoint, next) {
    var role_method = 'rule_' + method.toLowerCase();
    var allow = false;
    for (var i = 0; i < this[role_method].length; i++) {
        if (this[role_method][i] == '*' || this[role_method][i] == endpoint) {
            allow = true;
        } else if (this[role_method][i] == '^' + endpoint) {
            allow = false;
        }
    }
    next(null, allow);
}


module.export = mongoose.model('Role', roleSchema);
    