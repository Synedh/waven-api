'use strict';

var mongoose = require('mongoose'),
  Resource = mongoose.model('Resource');

exports.list_all_resources = function(req, res) {
  Resource.find(req.query, function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};




exports.create_an_resource = function(req, res) {
  var newResource = new Resource(req.body);
  newResource.save(function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};


exports.read_an_resource = function(req, res) {
  Resource.findById(req.params.resourceId, function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};


exports.update_an_resource = function(req, res) {
  Resource.findByIdAndUpdate({_id: req.params.resourceId}, req.body, {new: true}, function(err, resource) {
    if (err)
      res.send(err);
    res.json(resource);
  });
};


exports.delete_an_resource = function(req, res) {
  Resource.deleteOne({_id: req.params.resourceId}, function(err, resource) {
    if (err)
      res.send(err);
    res.json({ message: 'Elemental generation successfully deleted.' });
  });
};
