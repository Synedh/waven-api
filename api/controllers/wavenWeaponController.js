'use strict';

/**
 * @apiDefine WeaponTypeNotFoundError
 *
 * @apiError WeaponTypeNotFound Cannot find WeaponType with given id.
 *
 * @apiErrorExample 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *         "error": "Cannot find WeaponType with id :id"
 *     }
 */

var mongoose    = require('mongoose'),
    Weapon      = mongoose.model('Weapon');


/**
 * @api {get} /weapons LIST Weapons
 * @apiName ListWeapon
 * @apiGroup WEAPON
 *
 * @apiDescription List all existing Weapons.
 *
 * @apiSuccess {String} _id  id of the Weapon.
 * @apiSuccess {String} name name of the Weapon.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Weapon.
 * @apiSuccess {String} imageUrl  Url of icon corresponding to the Weapon.
 * @apiSuccess {String} description  Description of the Weapon.
 * @apiSuccess {Passive[]} passives  Passives of the Weapon.
 * @apiSuccess {Spells[]} spells  Unique spells of the Weapon.
 * @apiSuccess {weaponSkin[]} weaponSkin Skins of the Weapon.
 * @apiSuccess {Number[]} life  Array of numbers containing life of the weapon at each level.
 * @apiSuccess {Number[]} damage  Array of numbers containing damage values of the weapon at each level.
 * @apiSuccess {Number[]} movement  Array of numbers containing movement poitns of the weapon at each level.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "_id": "",
 *             "name": "",
 *             "iconUrl": "",
 *             "imageUrl": "",
 *             "description": "",
 *             "spells": [],
 *             "passives": [],
 *             "weaponSkins": [],
 *             "life": [],
 *             "damage": [],
 *             "movement": []
 *         }
 *     ]
 *
 * @apiUse UnauthorizedError
 */

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
 * @api {get} /weapons/:id GET Weapon
 * @apiName GetWeapon
 * @apiGroup WEAPON
 *
 * @apiDescription Request Weapon of given id.
 *
 * @apiParam {Number} id Weapon unique ID.
 *
 * @apiSuccess {String} _id  id of the Weapon.
 * @apiSuccess {String} name name of the Weapon.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Weapon.
 * @apiSuccess {String} imageUrl  Url of icon corresponding to the Weapon.
 * @apiSuccess {String} description  Description of the Weapon.
 * @apiSuccess {Passive[]} passives  Passives of the Weapon.
 * @apiSuccess {Spells[]} spells  Unique spells of the Weapon.
 * @apiSuccess {weaponSkin[]} weaponSkin Skins of the Weapon.
 * @apiSuccess {Number[]} life  Array of numbers containing life of the weapon at each level.
 * @apiSuccess {Number[]} damage  Array of numbers containing damage values of the weapon at each level.
 * @apiSuccess {Number[]} movement  Array of numbers containing movement poitns of the weapon at each level.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "",
 *         "name": "",
 *         "iconUrl": "",
 *         "imageUrl": "",
 *         "description": "",
 *         "spells": [],
 *         "passives": [],
 *         "weaponSkins": [],
 *         "life": [],
 *         "damage": [],
 *         "movement": []
 *     }
 *
 * @apiUse UnauthorizedError
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
