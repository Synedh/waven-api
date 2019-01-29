'use strict';

/**
 * @apiDefine SpellNotFoundError
 *
 * @apiError SpellNotFound Cannot find Spell with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Spell with id :id."
 *     }
 */

var mongoose = require('mongoose'),
  Spell = mongoose.model('Spell');

exports.list_all_spells = function(req, res) {
  Spell.find(req.query, function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};


exports.create_a_spell = function(req, res) {
  var new_spell = new Spell(req.body);
  new_spell.save(function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};


/**
 * @api {get} /spells/:id Request Spell of given id.
 * @apiName GetSpell
 * @apiGroup Spell
 *
 * @apiParam {Number} id Spell unique ID.
 *
 * @apiSuccess {String} name name of the Spell.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Spell.
 * @apiSuccess {Element} element [Empty - Do not use] Element of the Spell.
 * @apiSuccess {String} description  Description of the Spell.
 * @apiSuccess {Number} cost  AP cost to cast the Spell.
 * @apiSuccess {Number} stockpile  AP points given to the stockpile by the Spell.
 * @apiSuccess {Resource[]} resources  Resources given by the Spell.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "iconUrl": ""
 *       "element": null
 *       "description": ""
 *       "cost": 0
 *       "stockpile": 0
 *       "resources": []
 *     }
 *
 * @apiUse SpellNotFoundError
 */


exports.read_a_spell = function(req, res) {
  Spell.findById(req.params.spellId, function(err, spell) {
    if (err)
      res.send(err);
    if (spell)
      res.json(spell);
    res.status(404)
      .json({error: 'Cannot find spell with id ' + req.params.spellId + '.'})
  });
};


exports.update_a_spell = function(req, res) {
  Spell.findByIdAndUpdate({_id: req.params.spellId}, req.body, {new: true}, function(err, spell) {
    if (err)
      res.send(err);
    if (spell)
      res.json(spell);
    res.status(404)
      .json({error: 'Cannot find spell with id ' + req.params.spellId + '.'})
  });
};


exports.delete_a_spell = function(req, res) {
  Spell.deleteOne({_id: req.params.spellId}, function(err, spell) {
    if (err)
      res.send(err);
    res.json({ message: 'Spell successfully deleted.' });
  });
};
