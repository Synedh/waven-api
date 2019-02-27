'use strict';

/**
 * @apiDefine ClassNotFoundError
 *
 * @apiError ClassNotFound Cannot find Class with given id.
 *
 * @apiErrorExample 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *         "error": "Cannot find Class with id :id."
 *     }
 */

var mongoose    = require('mongoose'),
    Race        = mongoose.model('Race');

exports.list_all_races = function(req, res) {
  Race.find(req.query, function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


/**
 * @api {get} /classes LIST Classes
 * @apiName ListClass
 * @apiGroup CLASS
 *
 * @apiDescription List all existing classes.
 *
 * @apiSuccess {String} _id  id of the Class.
 * @apiSuccess {String} name  Short name of the Class.
 * @apiSuccess {String} fullName  Full name of the Class.
 * @apiSuccess {String} portaitUrl  Url of portait corresponding to the Class.
 * @apiSuccess {String} imageUrl  Url of image corresponding to the Class.
 * @apiSuccess {String} description  Description of the Class.
 * @apiSuccess {Weapon[]} weapons  List of weapons of the Classe.
 * @apiSuccess {Spell[]} spells  List of spells of the Class.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "_id": "",
 *             "name": "",
 *             "fullName": "",
 *             "portaitUrl": "",
 *             "imageUrl": "",
 *             "description": "",
 *             "weapons": [],
 *             "spells": []
 *         }
 *     ]
 *
 * @apiUse UnauthorizedError
 */


exports.create_a_race = function(req, res) {
  var new_race = new Race(req.body);
  new_race.save(function(err, race) {
    if (err)
      res.send(err);
    res.json(race);
  });
};


/**
 * @api {get} /classes/:id GET Class
 * @apiName GetClass
 * @apiGroup CLASS
 *
 * @apiDescription Request Class of given id.
 *
 * @apiParam {String} id Class unique ID.
 *
 * @apiSuccess {String} _id  id of the Cass.
 * @apiSuccess {String} name  Short name of the Class.
 * @apiSuccess {String} fullName  Full name of the Class.
 * @apiSuccess {String} portaitUrl  Url of portait corresponding to the Class.
 * @apiSuccess {String} imageUrl  Url of image corresponding to the Class.
 * @apiSuccess {String} description  Description of the Class.
 * @apiSuccess {Weapon[]} weapons  List of weapons of the Classe.
 * @apiSuccess {Spell[]} spells  List of spells of the Class.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "",
 *         "name": "",
 *         "fullName": "",
 *         "portaitUrl": "",
 *         "imageUrl": "",
 *         "description": "",
 *         "weapons": [],
 *         "spells": []
 *     }
 *
 * @apiUse UnauthorizedError
 * @apiUse ClassNotFoundError
 */


exports.read_a_race = function(req, res) {
  Race.findById(req.params.classId, function(err, race) {
    if (err)
      return res.send(err);
    if (race)
      return res.json(race);
    return res.status(404)
      .json({error: 'Cannot find race with id ' + req.params.raceId + '.'})
  });
};


exports.update_a_race = function(req, res) {
  Race.findByIdAndUpdate({_id: req.params.classId}, req.body, {new: true}, function(err, race) {
    if (err)
      return res.send(err);
    if (race)
      return res.json(race);
    return res.status(404)
      .json({error: 'Cannot find race with id ' + req.params.raceId + '.'})
  });
};


exports.delete_a_race = function(req, res) {
  Race.deleteOne({_id: req.params.classId}, function(err, race) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted.' });
  });
};
