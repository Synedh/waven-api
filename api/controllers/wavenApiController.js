'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.list_all_classes = function(req, res) {
  Class.find({}, function(err, class) {
    if (err)
      res.send(err);
    res.json(class);
  });
};




exports.create_a_class = function(req, res) {
  var new_class = new Class(req.body);
  new_class.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(class);
  });
};


exports.read_a_class = function(req, res) {
  Class.findById(req.params.classId, function(err, class) {
    if (err)
      res.send(err);
    res.json(class;
  });
};


exports.update_a_class = function(req, res) {
  Class.findOneAndUpdate({_id: req.params.classId}, req.body, {new: true}, function(err, class) {
    if (err)
      res.send(err);
    res.json(class);
  });
};


exports.delete_a_class = function(req, res) {
  Class.remove({_id: req.params.classId}, function(err, class) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted' });
  });
};
