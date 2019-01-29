'use strict';

/**
 * @apiDefine WeaponNotFoundError
 *
 * @apiError WeaponNotFound Cannot find Weapon with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Weapon with id :id"
 *     }
 */

var mongoose = require('mongoose'),
  Weapon = mongoose.model('Weapon');

exports.list_all_weapons = function(req, res) {
  Weapon.find(req.query, function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.create_a_weapon = function(req, res) {
  var new_weapon = new Weapon(req.body);
  new_weapon.save(function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


/**
 * @api {get} /weapons/:id Request Weapon of given id.
 * @apiName GetWeapon
 * @apiGroup Weapon
 *
 * @apiParam {Number} id Weapon unique ID.
 *
 * @apiSuccess {String} name name of the Weapon.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Weapon.
 * @apiSuccess {String} imageUrl  Url of image corresponding to the Weapon.
 * @apiSuccess {String} description  Description of the Weapon.
 * @apiSuccess {WeaponType} weaponType  Weapon type of the Weapon.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "iconUrl": ""
 *       "imageUrl": ""
 *       "description": ""
 *       "weaponType": null
 *     }
 *
 * @apiUse WeaponNotFoundError
 */


exports.read_a_weapon = function(req, res) {
  Weapon.findById(req.params.weaponId, function(err, weapon) {
    if (err)
      res.send(err);
    if (weapon)
      res.json(weapon);
    res.status(404)
      .json({error: 'Cannot find weapon with id ' + req.params.weaponId + '.'})
  });
};


exports.update_a_weapon = function(req, res) {
  Weapon.findByIdAndUpdate({_id: req.params.weaponId}, req.body, {new: true}, function(err, weapon) {
    if (err)
      res.send(err);
    if (weapon)
      res.json(weapon);
    res.status(404)
      .json({error: 'Cannot find weapon with id ' + req.params.weaponId + '.'})
  });
};


exports.delete_a_weapon = function(req, res) {
  Weapon.deleteOne({_id: req.params.weaponId}, function(err, weapon) {
    if (err)
      res.send(err);
    res.json({ message: 'Weapon successfully deleted.' });
  });
};
