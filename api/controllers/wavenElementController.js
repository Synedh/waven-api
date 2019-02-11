'use strict';

/**
 * @apiDefine ElementNotFoundError
 *
 * @apiError ElementNotFound Cannot find Element with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Element with id :id."
 *     }
 */

var mongoose = require('mongoose'),
  Element = mongoose.model('Element');

exports.list_all_elements = function(req, res) {
  Element.find(req.query, function(err, element) {
    if (err)
      res.send(err);
    res.json(element);
  });
};


exports.create_an_element = function(req, res) {
  var new_element = new Element(req.body);
  new_element.save(function(err, element) {
    if (err)
      res.send(err);
    res.json(element);
  });
};


/**
 * @api {get} /elements/:id Request Element of given id.
 * @apiName GetElement
 * @apiGroup Element
 *
 * @apiParam {Number} id Element unique ID.
 *
 * @apiSuccess {String} name  Name of the Element.
 * @apiSuccess {String} iconUrl Url of icon corresponding to the Element.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Air",
 *       "iconUrl": "https://random.url"
 *     }
 *
 * @apiUse ElementNotFoundError
 */


exports.read_an_element = function(req, res) {
  Element.findById(req.params.elementId, function(err, element) {
    if (err)
      return res.send(err);
    if (element)
      return res.json(element);
    return res.status(404)
      .json({error: 'Cannot find element with id ' + req.params.elementId + '.'})
  });
};


exports.update_an_element = function(req, res) {
  Element.findByIdAndUpdate({_id: req.params.elementId}, req.body, {new: true}, function(err, element) {
    if (err)
      return res.send(err);
    if (element)
      return res.json(element);
    return res.status(404)
      .json({error: 'Cannot find element with id ' + req.params.elementId + '.'})
  });
};


exports.delete_an_element = function(req, res) {
  Element.deleteOne({_id: req.params.elementId}, function(err, element) {
    if (err)
      res.send(err);
    res.json({ message: 'Element successfully deleted.' });
  });
};
