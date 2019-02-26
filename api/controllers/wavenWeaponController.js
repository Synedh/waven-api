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

var mongoose    = require('mongoose'),
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


exports.read_a_weapon = function(req, res) {
  Weapon.findById(req.params.weaponId, function(err, weapon) {
    if (err)
      return res.send(err);
    if (weapon)
      return res.json(weapon);
    return res.status(404)
      .json({error: 'Cannot find weapon with id ' + req.params.weaponId + '.'})
  });
};


exports.update_a_weapon = function(req, res) {
  Weapon.findByIdAndUpdate({_id: req.params.weaponId}, req.body, {new: true}, function(err, weapon) {
    if (err)
      return res.send(err);
    if (weapon)
      return res.json(weapon);
    return res.status(404)
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
