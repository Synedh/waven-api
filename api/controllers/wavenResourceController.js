'use strict';

/**
 * @apiDefine ResourceNotFoundError
 *
 * @apiError ResourceNotFound Cannot find Resource with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find Resource with id :id."
 *     }
 */

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


/**
 * @api {get} /resources/:id Request Resource of given id.
 * @apiName GetResource
 * @apiGroup Resource
 *
 * @apiParam {Number} id Resource unique ID.
 *
 * @apiSuccess {Element} element Element of the Resource.
 * @apiSuccess {Number} quantity  Quantity of Elements.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "element": null,
 *       "quantity": 0
 *     }
 *
 * @apiUse ResourceNotFoundError
 */


exports.read_an_resource = function(req, res) {
  Resource.findById(req.params.resourceId, function(err, resource) {
    if (err)
      res.send(err);
    if (resource)
      res.json(resource);
    res.status(404)
      .json({error: 'Cannot find resource with id ' + req.params.resourceId + '.'})
  });
};


exports.update_an_resource = function(req, res) {
  Resource.findByIdAndUpdate({_id: req.params.resourceId}, req.body, {new: true}, function(err, resource) {
    if (err)
      res.send(err);
    if (resource)
      res.json(resource);
    res.status(404)
      .json({error: 'Cannot find resource with id ' + req.params.resourceId + '.'})
  });
};


exports.delete_an_resource = function(req, res) {
  Resource.deleteOne({_id: req.params.resourceId}, function(err, resource) {
    if (err)
      res.send(err);
    res.json({ message: 'Elemental generation successfully deleted.' });
  });
};
