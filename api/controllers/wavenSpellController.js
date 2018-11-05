'use strict';

var mongoose = require('mongoose'),
  Spell = mongoose.model('Spell');

exports.list_all_spells = function(req, res) {
  Spell.find(req.query, function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};




exports.create_a_spell = function(req, res) {
  var new_spell = new Spell(req.body);
  new_spell.save(function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};


exports.read_a_spell = function(req, res) {
  Spell.findById(req.params.spellId, function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};


exports.update_a_spell = function(req, res) {
  Spell.findByIdAndUpdate({_id: req.params.spellId}, req.body, {new: true}, function(err, spell) {
    if (err)
      res.send(err);
    res.json(spell);
  });
};


exports.delete_a_spell = function(req, res) {
  Spell.deleteOne({_id: req.params.spellId}, function(err, spell) {
    if (err)
      res.send(err);
    res.json({ message: 'Spell successfully deleted.' });
  });
};
