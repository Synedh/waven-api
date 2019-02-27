'use strict';

/**
 * @apiDefine ResourceNotFoundError
 *
 * @apiError ResourceNotFound Cannot find Resource with given id.
 *
 * @apiErrorExample 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *         "error": "Cannot find Resource with id :id."
 *     }
 */

var mongoose    = require('mongoose'),
    Resource    = mongoose.model('Resource');


/**
 * @api {get} /resources LIST Resources
 * @apiName ListResource
 * @apiGroup RESOURCE
 * @apiPrivate
 *
 * @apiDescription List all existing resource.
 *
 * @apiSuccess {String} _id  id of the Element.
 * @apiSuccess {Element} element Element of the Resource.
 * @apiSuccess {Number} quantity  Quantity of Elements.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "_id": "",
 *             "element": null,
 *             "quantity": 0
 *         }
 *     ]
 *
 * @apiUse UnauthorizedError
 */


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
 * @api {get} /resources/:id GET Resource
 * @apiName GetResource
 * @apiGroup Resource
 * @apiPrivate
 *
 * @apiDescription Request Resource of given id.
 *
 * @apiParam {Number} id Resource unique ID.
 *
 * @apiSuccess {String} _id  id of the Element.
 * @apiSuccess {Element} element Element of the Resource.
 * @apiSuccess {Number} quantity  Quantity of Elements.
 *
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 *     {
 *         "_id": "",
 *         "element": null,
 *         "quantity": 0
 *     }
 *
 * @apiUse UnauthorizedError
 * @apiUse ResourceNotFoundError
 */


exports.read_an_resource = function(req, res) {
  Resource.findById(req.params.resourceId, function(err, resource) {
    if (err)
      return res.send(err);
    if (resource)
      return res.json(resource);
    return res.status(404)
      .json({error: 'Cannot find resource with id ' + req.params.resourceId + '.'})
  });
};


exports.update_an_resource = function(req, res) {
  Resource.findByIdAndUpdate({_id: req.params.resourceId}, req.body, {new: true}, function(err, resource) {
    if (err)
      return res.send(err);
    if (resource)
      return res.json(resource);
    return res.status(404)
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
