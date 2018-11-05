'use strict';

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


exports.read_a_news = function(req, res) {
  News.findById(req.params.newsId, function(err, news) {
    if (err)
      res.send(err);
    res.json(news);
  });
};


exports.update_a_news = function(req, res) {
  News.findByIdAndUpdate({_id: req.params.newsId}, req.body, {new: true}, function(err, news) {
    if (err)
      res.send(err);
    res.json(news);
  });
};


exports.delete_a_news = function(req, res) {
  News.deleteOne({_id: req.params.newsId}, function(err, news) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted.' });
  });
};
