'use strict';


var mongoose = require('mongoose'),
  Fellow = mongoose.model('Fellow');

exports.list_all_fellows = function(req, res) {
  Fellow.find({}, function(err, fellow) {
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


exports.read_a_fellow = function(req, res) {
  Fellow.findById(req.params.fellowId, function(err, fellow) {
    if (err)
      res.send(err);
    res.json(fellow);
  });
};


exports.update_a_fellow = function(req, res) {
  Fellow.findByIdAndUpdate({_id: req.params.fellowId}, req.body, {new: true}, function(err, fellow) {
    if (err)
      res.send(err);
    res.json(fellow);
  });
};


exports.delete_a_fellow = function(req, res) {
  Fellow.remove({_id: req.params.fellowId}, function(err, fellow) {
    if (err)
      res.send(err);
    res.json({ message: 'Fellow successfully deleted.' });
  });
};
