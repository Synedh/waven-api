'use strict';

/**
 * @apiDefine ElementNotFoundError
 *
 * @apiError ElementNotFound Cannot find Element with given id.
 *
 * @apiErrorExample 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *         "error": "Cannot find Element with id :id."
 *     }
 */

var mongoose    = require('mongoose'),
    Element     = mongoose.model('Element');


/**
 * @api {get} /elements LIST Elements
 * @apiName ListElement
 * @apiGroup ELEMENT
 *
 * @apiDescription List all existing Elements.
 *
 * @apiSuccess {String} _id  id of the Element.
 * @apiSuccess {String} name  Name of the Element.
 * @apiSuccess {String} iconUrl  Url of icon corresponding to the Element.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "_id": "",
 *             "name": "",
 *             "iconUrl": ""
 *         }
 *     ]
 *
 * @apiUse UnauthorizedError
 */

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
 * @api {get} /elements/:id GET Element
 * @apiName GetElement
 * @apiGroup ELEMENT
 *
 * @apiDescription Request element with given id.
 *
 * @apiParam {String} id Element unique ID.
 *
 * @apiSuccess {String} _id  id of the Element.
 * @apiSuccess {String} name  Name of the Element.
 * @apiSuccess {String} iconUrl Url of icon corresponding to the Element.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "",
 *         "name": "",
 *         "iconUrl": ""
 *     }
 *
 * @apiUse UnauthorizedError
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
