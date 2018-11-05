'use strict';

var mongoose = require('mongoose'),
  Buff = mongoose.model('Buff');

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


exports.read_a_buff = function(req, res) {
  Buff.findById(req.params.buffId, function(err, buff) {
    if (err)
      res.send(err);
    res.json(buff);
  });
};


exports.update_a_buff = function(req, res) {
  Buff.findByIdAndUpdate({_id: req.params.buffId}, req.body, {new: true}, function(err, buff) {
    if (err)
      res.send(err);
    res.json(buff);
  });
};


exports.delete_a_buff = function(req, res) {
  Buff.deleteOne({_id: req.params.buffId}, function(err, buff) {
    if (err)
      res.send(err);
    res.json({ message: 'Buff successfully deleted.' });
  });
};
