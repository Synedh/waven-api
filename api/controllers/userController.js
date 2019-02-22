'use strict';

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound Cannot find User with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find User with id :id."
 *     }
 */

var mongoose    = require('mongoose'),
    User        = mongoose.model('User');

exports.list_all_users = function(req, res) {
    User.find(req.query, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


/**
 * @api {put} /users/:id Update user of given id.
 * @apiName PutUser
 * @apiPermission admin
 * @apiGroup User
 *
 * @apiParam {Number} id  User unique ID.
 * @apiParam {String} name  Name of the User.
 * @apiParam {String} email  Email of the User.
 * @apiParam {String} password  Password of the User.
 * @apiParam {String} roleId  ID of the User's role.
 *
 * @apiSuccess {String} _id  id of the new User.
 * @apiSuccess {String} name  Name of the new User.
 * @apiSuccess {String} email  Email of the new User.
 * @apiSuccess {String} roleId  ID of the User's role.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "azerty1234567890",
 *       "name": "Blabla",
 *       "email": "main@email.com",
 *       "role": {
 *          "rule_get": [
 *              "*"
 *          ],
 *          "rule_post": [
 *              "*"
 *          ],
 *          "rule_put": [
 *              "*"
 *          ],
 *          "rule_delete": [
 *              "*"
 *          ],
 *          "_id": "azerty1234567890",
 *          "name": "Role"
 *       }
 *     }
 *
 */


exports.create_a_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


/**
 * @api {get} /users/:id Request user of given id.
 * @apiName GetUser
 * @apiPermission admin
 * @apiGroup User
 *
 * @apiParam {Number} id User unique ID.
 *
 * @apiSuccess {String} _id  id of the User.
 * @apiSuccess {String} name  Name of the User.
 * @apiSuccess {String} email  Email of the User.
 * @apiSuccess {Role} role  role of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "azerty1234567890",
 *       "name": "Blabla",
 *       "email": "main@email.com",
 *       "role": {
 *          "rule_get": [
 *              "*"
 *          ],
 *          "rule_post": [
 *              "*"
 *          ],
 *          "rule_put": [
 *              "*"
 *          ],
 *          "rule_delete": [
 *              "*"
 *          ],
 *          "_id": "azerty1234567890",
 *          "name": "Role"
 *       }
 *     }
 *
 * @apiUse UserNotFoundError
 */


exports.read_a_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


/**
 * @api {put} /users/:id Update user of given id.
 * @apiName PutUser
 * @apiPermission none
 * @apiGroup User
 *
 * @apiParam {Number} id  User unique ID.
 * @apiParam {String} email  Email of the User.
 * @apiParam {String} password  Password of the User.
 *
 * @apiSuccess {String} _id  id of the new User.
 * @apiSuccess {String} name  Name of the new User.
 * @apiSuccess {String} email  Email of the new User.
 * @apiSuccess {Role} role  role of the new User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "azerty1234567890",
 *       "name": "Blabla",
 *       "email": "main@email.com",
 *       "role": {
 *          "rule_get": [
 *              "*"
 *          ],
 *          "rule_post": [
 *              "*"
 *          ],
 *          "rule_put": [
 *              "*"
 *          ],
 *          "rule_delete": [
 *              "*"
 *          ],
 *          "_id": "azerty1234567890",
 *          "name": "Role"
 *       }
 *     }
 *
 * @apiUse UserNotFoundError
 */


exports.update_a_user = function(req, res) {
    User.findByIdAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
        if (err)
            res.status(400).send(err);
        res.json(user);
    });
};


/**
 * @api {delete} /users/:id Delete user of given id.
 * @apiName DeleteUser
 * @apiPermission admin
 * @apiGroup User
 *
 * @apiParam {Number} id User unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User successfully deleted."
 *     }
 *
 * @apiUse UserNotFoundError
 */



exports.delete_a_user = function(req, res) {
    User.deleteOne({_id: req.params.userId}, function(err, user) {
        if (err)
            res.send(err);
        res.json({ message: 'User successfully deleted.' });
    });
};
