'use strict';

/**
 * @apiDefine TransferNotFoundError
 *
 * @apiError TransferNotFound Cannot find Transfer with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Transfer with id :id"
 *     }
 */

var mongoose = require('mongoose'),
  Transfer = mongoose.model('Transfer');

exports.list_all_transfers = function(req, res) {
  Transfer.find(req.query, function(err, transfer) {
    if (err)
      res.send(err);
    res.json(transfer);
  });
};


exports.create_a_transfer = function(req, res) {
  var new_transfer = new Transfer(req.body);
  new_transfer.save(function(err, transfer) {
    if (err)
      res.send(err);
    res.json(transfer);
  });
};


/**
 * @api {get} /transfers/:id Request Transfer of given id.
 * @apiName GetTransfer
 * @apiGroup Transfer
 *
 * @apiParam {Number} id Transfer unique ID.
 *
 * @apiSuccess {String} name name of the Transfer.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Transfer.
 * @apiSuccess {String} description  Description of the Transfer.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "iconUrl": ""
 *       "description": ""
 *     }
 *
 * @apiUse TransferNotFoundError
 */


exports.read_a_transfer = function(req, res) {
  Transfer.findById(req.params.transferId, function(err, transfer) {
    if (err)
      return nes.send(err);
    if (transfer)
      return res.json(transfer);
    return res.status(404)
      .json({error: 'Cannot find transfer with id ' + req.params.transferId + '.'})
  });
};


exports.update_a_transfer = function(req, res) {
  Transfer.findByIdAndUpdate({_id: req.params.transferId}, req.body, {new: true}, function(err, transfer) {
    if (err)
      return res.send(err);
    if (transfer)
      return res.json(transfer);
    return res.status(404)
      .json({error: 'Cannot find transfer with id ' + req.params.transferId + '.'})
  });
};


exports.delete_a_transfer = function(req, res) {
  Transfer.deleteOne({_id: req.params.transferId}, function(err, transfer) {
    if (err)
      res.send(err);
    res.json({ message: 'Transfer successfully deleted.' });
  });
};
