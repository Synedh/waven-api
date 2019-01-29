'use strict';

/**
 * @apiDefine WeaponTypeNotFoundError
 *
 * @apiError WeaponTypeNotFound Cannot find WeaponType with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find WeaponType with id :id"
 *     }
 */

var mongoose = require('mongoose'),
  WeaponType = mongoose.model('WeaponType');

exports.list_all_weaponTypes = function(req, res) {
  WeaponType.find(req.query, function(err, weaponType) {
    if (err)
      res.send(err);
    res.json(weaponType);
  });
};


exports.create_a_weaponType = function(req, res) {
  var new_weaponType = new WeaponType(req.body);
  new_weaponType.save(function(err, weaponType) {
    if (err)
      res.send(err);
    res.json(weaponType);
  });
};


/**
 * @api {get} /buffs/:id Request WeaponType of given id.
 * @apiName GetWeaponType
 * @apiGroup WeaponType
 *
 * @apiParam {Number} id WeaponType unique ID.
 *
 * @apiSuccess {String} name name of the Weapon type.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Weapon type.
 * @apiSuccess {String} imageUrl  Url of icon corresponding to the Weapon type.
 * @apiSuccess {String} description  Description of the Weapon type.
 * @apiSuccess {Passive[]} passives  Passives of the Weapon type.
 * @apiSuccess {Spells[]} spells  Special spells of the Weapon type.
 * @apiSuccess {Number} life  Default life of the Weapon type.
 * @apiSuccess {Number} damage  Default damage of the Weapon type.
 * @apiSuccess {Number} movement  default movement points of the Weapon type.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "iconUrl": ""
 *       "imageUrl": ""
 *       "description": ""
 *       "passives": ""
 *       "spells": ""
 *       "life": ""
 *       "damage": ""
 *       "movement": ""
 *     }
 *
 * @apiUse WeaponTypeNotFoundError
 */


exports.read_a_weaponType = function(req, res) {
  WeaponType.findById(req.params.weaponTypeId, function(err, weaponType) {
    if (err)
      res.send(err);
    if (weaponType)
      res.json(weaponType);
    res.status(404)
      .json({error: 'Cannot find weaponType with id ' + req.params.weaponTypeId + '.'})
  });
};


exports.update_a_weaponType = function(req, res) {
  WeaponType.findByIdAndUpdate({_id: req.params.weaponTypeId}, req.body, {new: true}, function(err, weaponType) {
    if (err)
      res.send(err);
    if (weaponType)
      res.json(weaponType);
    res.status(404)
      .json({error: 'Cannot find weaponType with id ' + req.params.weaponTypeId + '.'})
  });
};


exports.delete_a_weaponType = function(req, res) {
  WeaponType.deleteOne({_id: req.params.weaponTypeId}, function(err, weaponType) {
    if (err)
      res.send(err);
    res.json({ message: 'WeaponType successfully deleted.' });
  });
};
