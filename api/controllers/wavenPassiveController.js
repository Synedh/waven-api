'use strict';

/**
 * @apiDefine PassiveNotFoundError
 *
 * @apiError PassiveNotFound Cannot find Passive with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Passive with id :id."
 *     }
 */

var mongoose = require('mongoose'),
  Passive = mongoose.model('Passive');

exports.list_all_passives = function(req, res) {
  Passive.find(req.query, function(err, passive) {
    if (err)
      res.send(err);
    res.json(passive);
  });
};


exports.create_a_passive = function(req, res) {
  var new_passive = new Passive(req.body);
  new_passive.save(function(err, passive) {
    if (err)
      res.send(err);
    res.json(passive);
  });
};


/**
 * @api {get} /passives/:id Request Passive of given id.
 * @apiName GetPassive
 * @apiGroup Passive
 *
 * @apiParam {Number} id Passive unique ID.
 *
 * @apiSuccess {String} name  Name of the Passive.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Passive.
 * @apiSuccess {String} description  Description of the Passive.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "iconUrl": ""
 *       "description": ""
 *     }
 *
 * @apiUse PassiveNotFoundError
 */


exports.read_a_passive = function(req, res) {
  Passive.findById(req.params.passiveId, function(err, passive) {
    if (err)
      return res.send(err);
    if (passive)
      return res.json(passive);
    return res.status(404)
      .json({error: 'Cannot find passive with id ' + req.params.passiveId + '.'})
  });
};


exports.update_a_passive = function(req, res) {
  Passive.findByIdAndUpdate({_id: req.params.passiveId}, req.body, {new: true}, function(err, passive) {
    if (err)
      return res.send(err);
    if (passive)
      return res.json(passive);
    return res.status(404)
      .json({error: 'Cannot find passive with id ' + req.params.passiveId + '.'})
  });
};


exports.delete_a_passive = function(req, res) {
  Passive.deleteOne({_id: req.params.passiveId}, function(err, passive) {
    if (err)
      res.send(err);
    res.json({ message: 'Passive successfully deleted.' });
  });
};
