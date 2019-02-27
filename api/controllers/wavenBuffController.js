'use strict';

/**
 * @apiDefine BuffNotFoundError
 *
 * @apiError BuffNotFound Cannot find Buff with given id.
 *
 * @apiErrorExample 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *         "error": "Cannot find Buff with id :id."
 *     }
 */

var mongoose    = require('mongoose'),
    Buff        = mongoose.model('Buff');


/**
 * @api {get} /buffs LIST Buffs
 * @apiName ListBuff
 * @apiGroup BUFF
 *
 * @apiDescription List all existing buffs.
 *
 * @apiSuccess {String} _id  id of the Buff.
 * @apiSuccess {String} name  Name of the Buff.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Buff.
 * @apiSuccess {String} description  Description of the Element.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "_id": "",
 *             "name": "",
 *             "iconUrl": ""
 *             "description": ""
 *         }
 *     ]
 *
 * @apiUse UnauthorizedError
 */

exports.list_all_buffs = function(req, res) {
  Buff.find(req.query, function(err, buff) {
    if (err)
      res.send(err);
    res.json(buff);
  });
};


exports.create_a_buff = function(req, res) {
  var new_buff = new Buff(req.body);
  new_buff.save(function(err, buff) {
    if (err)
      res.send(err);
    res.json(buff);
  });
};


/**
 * @api {get} /buffs/:id GET Buff
 * @apiName GetBuff
 * @apiGroup BUFF
 *
 * @apiDescription Get buff of given id.
 *
 * @apiParam {String} id Buff unique ID.
 *
 * @apiSuccess {String} _id  id of the Buff.
 * @apiSuccess {String} name  Name of the Buff.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Buff.
 * @apiSuccess {String} description  Description of the Element.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "",
 *          "name": "",
 *          "iconUrl": ""
 *          "description": ""
 *     }
 *
 * @apiUse UnauthorizedError
 * @apiUse BuffNotFoundError
 */

exports.read_a_buff = function(req, res) {
  Buff.findById(req.params.buffId, function(err, buff) {
    if (err)
      return res.send(err);
    if (buff)
      return res.json(buff);
    return res.status(404)
      .json({error: 'Cannot find buff with id ' + req.params.buffId + '.'})
  });
};


exports.update_a_buff = function(req, res) {
  Buff.findByIdAndUpdate({_id: req.params.buffId}, req.body, {new: true}, function(err, buff) {
    if (err)
      return res.send(err);
    if (buff)
      return res.json(buff);
    return res.status(404)
      .json({error: 'Cannot find buff with id ' + req.params.buffId + '.'})
  });
};


exports.delete_a_buff = function(req, res) {
  Buff.deleteOne({_id: req.params.buffId}, function(err, buff) {
    if (err)
      res.send(err);
    res.json({ message: 'Buff successfully deleted.' });
  });
};
