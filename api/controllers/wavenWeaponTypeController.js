'use strict';

var mongoose = require('mongoose'),
  WeaponType = mongoose.model('WeaponType');

exports.list_all_weaponTypes = function(req, res) {
  WeaponType.find(req.query, function(err, weaponType) {
    if (err)
      res.send(err);
    res.json(weaponType);
  });
};




exports.create_a_weaponType = function(req, res) {
  var new_weaponType = new WeaponType(req.body);
  new_weaponType.save(function(err, weaponType) {
    if (err)
      res.send(err);
    res.json(weaponType);
  });
};


exports.read_a_weaponType = function(req, res) {
  WeaponType.findById(req.params.weaponTypeId, function(err, weaponType) {
    if (err)
      res.send(err);
    res.json(weaponType);
  });
};


exports.update_a_weaponType = function(req, res) {
  WeaponType.findByIdAndUpdate({_id: req.params.weaponTypeId}, req.body, {new: true}, function(err, weaponType) {
    if (err)
      res.send(err);
    res.json(weaponType);
  });
};


exports.delete_a_weaponType = function(req, res) {
  WeaponType.deleteOne({_id: req.params.weaponTypeId}, function(err, weaponType) {
    if (err)
      res.send(err);
    res.json({ message: 'WeaponType successfully deleted.' });
  });
};
