var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/wavenApiModel'),
  bodyParser = require('body_parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Wavendb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/wavenApiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Waven RESTful API server started on: ' + port);
