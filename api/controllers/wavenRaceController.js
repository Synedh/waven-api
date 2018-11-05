'use strict';

var mongoose = require('mongoose'),
  Race = mongoose.model('Race');

exports.list_all_races = function(req, res) {
  Race.find(req.query, function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};




exports.create_a_race = function(req, res) {
  var new_race = new Race(req.body);
  new_race.save(function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


exports.read_a_race = function(req, res) {
  Race.findById(req.params.classId, function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


exports.update_a_race = function(req, res) {
  Race.findByIdAndUpdate({_id: req.params.classId}, req.body, {new: true}, function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


exports.delete_a_race = function(req, res) {
  Race.deleteOne({_id: req.params.classId}, function(err, race) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted.' });
  });
};
