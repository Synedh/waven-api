'use strict';

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


exports.read_a_passive = function(req, res) {
  Passive.findById(req.params.passiveId, function(err, passive) {
    if (err)
      res.send(err);
    res.json(passive);
  });
};


exports.update_a_passive = function(req, res) {
  Passive.findByIdAndUpdate({_id: req.params.passiveId}, req.body, {new: true}, function(err, passive) {
    if (err)
      res.send(err);
    res.json(passive);
  });
};


exports.delete_a_passive = function(req, res) {
  Passive.deleteOne({_id: req.params.passiveId}, function(err, passive) {
    if (err)
      res.send(err);
    res.json({ message: 'Passive successfully deleted.' });
  });
};
