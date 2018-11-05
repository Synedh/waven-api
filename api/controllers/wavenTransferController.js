'use strict';

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


exports.read_a_transfer = function(req, res) {
  Transfer.findById(req.params.transferId, function(err, transfer) {
    if (err)
      res.send(err);
    res.json(transfer);
  });
};


exports.update_a_transfer = function(req, res) {
  Transfer.findByIdAndUpdate({_id: req.params.transferId}, req.body, {new: true}, function(err, transfer) {
    if (err)
      res.send(err);
    res.json(transfer);
  });
};


exports.delete_a_transfer = function(req, res) {
  Transfer.deleteOne({_id: req.params.transferId}, function(err, transfer) {
    if (err)
      res.send(err);
    res.json({ message: 'Transfer successfully deleted.' });
  });
};
