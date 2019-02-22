'use strict';
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

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
});

roleSchema.methods.checkRole = function(req, next) {
    var role_method = 'rule_' + req.method.toLowerCase();
    var endpoint = req.originalUrl.split('/')[1];
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
    