'use strict';

/**
 * @apiDefine admin Admin access only
 *     This request is allowed only for admin users.
 */

/**
 * @apiDefine SuperUser SuperUser or Admin access only
 *     This request is allowed for superusers or admin users.
 */

/**
 * @apiDefine UnauthorizedError
 *
 * @apiError Unauthorized You cannot do this because you haven't authenticated.
 *
 * @apiErrorExample 401 Unauthorized
 *     HTTP/1.1 401 Unauthorized
 *     {
 *         "error": "Unauthorized"
 *     }
 */

/**
 * @apiDefine ForbbidenError
 *
 * @apiError Forbbiden Valid credentials but you doesn't have access.
 *
 * @apiErrorExample 403 Forbbiden
 *     HTTP/1.1 403 Forbbiden
 *     {
 *         "error": "Forbbiden"
 *     }
 */

var mongoose    = require('mongoose'),
    Role        = mongoose.model('Role');

exports.list_all_roles = function(req, res) {
    Role.find(req.query, function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};




exports.create_a_role = function(req, res) {
    var new_role = new Role(req.body);
    new_role.save(function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};


exports.read_a_role = function(req, res) {
    Role.findById(req.params.roleId, function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};


exports.update_a_role = function(req, res) {
    Role.findByIdAndUpdate({_id: req.params.roleId}, req.body, {new: true}, function(err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};


exports.delete_a_role = function(req, res) {
    Role.deleteOne({_id: req.params.roleId}, function(err, role) {
        if (err)
            res.send(err);
        res.json({ message: 'Role successfully deleted.' });
    });
};
