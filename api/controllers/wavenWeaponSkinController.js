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

var mongoose    = require('mongoose'),
    WeaponSkin  = mongoose.model('WeaponSkin');

exports.list_all_weapon_skins = function(req, res) {
  WeaponSkin.find(req.query, function(err, weapon_skins) {
    if (err)
      res.send(err);
    console.log(weapon_skins);
    res.json(weapon_skins);
  });
};


exports.create_a_weapon_skin = function(req, res) {
  var new_weapon_skin = new WeaponSkin(req.body);
  new_weapon_skin.save(function(err, weapon_skin) {
    if (err)
      res.send(err);
    res.json(weapon_skin);
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


exports.read_a_weapon_skin = function(req, res) {
  WeaponSkin.findById(req.params.weaponSkinId, function(err, weaponSkin) {
    if (err)
      return res.send(err);
    if (weaponSkin)
      return res.json(weaponSkin);
    return res.status(404)
      .json({error: 'Cannot find weapon skin with id ' + req.params.weaponSkinId + '.'})
  });
};


exports.update_a_weapon_skin = function(req, res) {
  WeaponSkin.findByIdAndUpdate({_id: req.params.weaponSkinId}, req.body, {new: true}, function(err, weaponSkin) {
    if (err)
      return res.send(err);
    if (weaponSkin)
      return res.json(weaponSkin);
    return res.status(404)
      .json({error: 'Cannot find weapon skin with id ' + req.params.weaponSkinId + '.'})
  });
};


exports.delete_a_weapon_skin = function(req, res) {
  WeaponSkin.deleteOne({_id: req.params.weaponSkinId}, function(err, weaponSkin) {
    if (err)
      res.send(err);
    res.json({ message: 'Weapon skin successfully deleted.' });
  });
};
