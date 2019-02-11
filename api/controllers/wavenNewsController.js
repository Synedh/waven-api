'use strict';

/**
 * @apiDefine NewsNotFoundError
 *
 * @apiError NewsNotFound Cannot find News with given id.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Cannot find News with id :id."
 *     }
 */

var mongoose = require('mongoose'),
  News = mongoose.model('News');

exports.list_all_news = function(req, res) {
  News.find(req.query, function(err, news) {
    if (err)
      res.send(err);
    res.json(news);
  });
};


exports.create_a_news = function(req, res) {
  var new_news = new News(req.body);
  new_news.save(function(err, news) {
    if (err)
      res.send(err);
    res.json(news);
  });
};


/**
 * @api {get} /news/:id Request News of given id.
 * @apiName GetNews
 * @apiGroup News
 *
 * @apiParam {Number} id News unique ID.
 *
 * @apiSuccess {String} name  Name of the News.
 * @apiSuccess {String} imageUrl  Url of icon corresponding to the News.
 * @apiSuccess {String} category  Category of the News.
 * @apiSuccess {String[]} tags  Tags of the News.
 * @apiSuccess {String} author  Author of the News.
 * @apiSuccess {Date} date  Publication date of the News.
 * @apiSuccess {String} content  Content of the News.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "",
 *       "imageUrl": ""
 *       "category": ""
 *       "tags": []
 *       "author": ""
 *       "Date": 0000
 *       "content": ""
 *     }
 *
 * @apiUse NewsNotFoundError
 */


exports.read_a_news = function(req, res) {
  News.findById(req.params.newsId, function(err, news) {
    if (err)
      return res.send(err);
    if (news)
      return res.json(news);
    return res.status(404)
      .json({error: 'Cannot find news with id ' + req.params.newsId + '.'})
  });
};


exports.update_a_news = function(req, res) {
  News.findByIdAndUpdate({_id: req.params.newsId}, req.body, {new: true}, function(err, news) {
    if (err)
      return res.send(err);
    if (news)
      return res.json(news);
    return res.status(404)
      .json({error: 'Cannot find news with id ' + req.params.newsId + '.'})
  });
};


exports.delete_a_news = function(req, res) {
  News.deleteOne({_id: req.params.newsId}, function(err, news) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted.' });
  });
};
