'use strict';

/**
 * @apiDefine FellowNotFoundError
 *
 * @apiError FellowNotFound Cannot find Fellow with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Fellow with id :id."
 *     }
 */

var mongoose = require('mongoose'),
  Fellow = mongoose.model('Fellow');

exports.list_all_fellows = function(req, res) {
  Fellow.find(req.query, function(err, fellow) {
    if (err)
      res.send(err);
    res.json(fellow);
  });
};


exports.create_a_fellow = function(req, res) {
  var new_fellow = new Fellow(req.body);
  new_fellow.save(function(err, fellow) {
    if (err)
      res.send(err);
    res.json(fellow);
  });
};


/**
 * @api {get} /fellows/:id Request Fellow of given id.
 * @apiName GetFellow
 * @apiGroup Fellow
 *
 * @apiParam {Number} id Fellow unique ID.
 *
 * @apiSuccess {String} name  Name of the Fellow.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Fellow.
 * @apiSuccess {String} portailUrl  Url of portrait corresponding to the Fellow.
 * @apiSuccess {String} description  Description of the Fellow.
 * @apiSuccess {Spell[]} spells  Spells the Fellow gives to the player.
 * @apiSuccess {Passive[]} passives  Passives of the Fellow.
 * @apiSuccess {Transfert} transfert  Transfer bonus of the Fellow.
 * @apiSuccess {Resource[]} resources  Resources needed to invoque the Fellow.
 * @apiSuccess {Number} life  Life of the Fellow.
 * @apiSuccess {Number} damage  Damages dealt by Fellow.
 * @apiSuccess {Number} movement  Movement points of the Fellow.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "iconUrl": ""
 *       "description": ""
 *       "spells": []
 *       "passives": []
 *       "transfert": null
 *       "resources": []
 *       "life": 0
 *       "damage": 0
 *       "movement": 0
 *     }
 *
 * @apiUse FellowNotFoundError
 */


exports.read_a_fellow = function(req, res) {
  Fellow.findById(req.params.fellowId, function(err, fellow) {
    if (err)
      return res.send(err);
    if (fellow)
      return res.json(fellow);
    return res.status(404)
      .json({error: 'Cannot find fellow with id ' + req.params.fellowId + '.'})
  });
};


exports.update_a_fellow = function(req, res) {
  Fellow.findByIdAndUpdate({_id: req.params.fellowId}, req.body, {new: true}, function(err, fellow) {
    if (err)
      return res.send(err);
    if (fellow)
      return res.json(fellow);
    return res.status(404)
      .json({error: 'Cannot find fellow with id ' + req.params.fellowId + '.'})
  });
};


exports.delete_a_fellow = function(req, res) {
  Fellow.deleteOne({_id: req.params.fellowId}, function(err, fellow) {
    if (err)
      res.send(err);
    res.json({ message: 'Fellow successfully deleted.' });
  });
};
