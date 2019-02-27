'use strict';

/**
 * @apiDefine PassiveNotFoundError
 *
 * @apiError PassiveNotFound Cannot find Passive with given id.
 *
 * @apiErrorExample 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *         "error": "Cannot find Passive with id :id."
 *     }
 */

var mongoose    = require('mongoose'),
    Passive     = mongoose.model('Passive');


/**
 * @api {get} /passives LIST Passives
 * @apiName ListPassive
 * @apiGroup PASSIVE
 *
 * @apiDescription List all existing passives.
 *
 * @apiSuccess {String} _id  id of the Passive.
 * @apiSuccess {String} name  Name of the Passive.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Passive.
 * @apiSuccess {String} description  Description of the Passive.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [
 *          {
 *              "_id": "",
 *              "name": "",
 *              "iconUrl": "",
 *              "description": ""
 *          }
 *     ]
 *
 * @apiUse UnauthorizedError
 */

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
 * @api {get} /passives/:id GET Passive
 * @apiName GetPassive
 * @apiGroup PASSIVE
 *
 * @apiDescription Request Passive of given id.
 *
 * @apiParam {Number} id Passive unique ID.
 *
 * @apiSuccess {String} _id  id of the Passive.
 * @apiSuccess {String} name  Name of the Passive.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Passive.
 * @apiSuccess {String} description  Description of the Passive.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "",
 *         "name": "",
 *         "iconUrl": "",
 *         "description": ""
 *     }
 *
 * @apiUse UnauthorizedError
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
