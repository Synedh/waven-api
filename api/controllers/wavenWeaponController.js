'use strict';


var mongoose = require('mongoose'),
  Weapon = mongoose.model('Weapon');

exports.list_all_weapons = function(req, res) {
  Weapon.find({}, function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};




exports.create_a_weapon = function(req, res) {
  var new_weapon = new Weapon(req.body);
  new_weapon.save(function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.read_a_weapon = function(req, res) {
  Weapon.findById(req.params.weaponId, function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.update_a_weapon = function(req, res) {
  Weapon.findByIdAndUpdate({_id: req.params.weaponId}, req.body, {new: true}, function(err, weapon) {
    if (err)
      res.send(err);
    res.json(weapon);
  });
};


exports.delete_a_weapon = function(req, res) {
  Weapon.remove({_id: req.params.weaponId}, function(err, weapon) {
    if (err)
      res.send(err);
    res.json({ message: 'Weapon successfully deleted.' });
  });
};
