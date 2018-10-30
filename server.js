var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 3000,
  News = require('./api/models/wavenNewsModel'),
  Element = require('./api/models/wavenElementModel'),
  Buff = require('./api/models/wavenBuffModel'),
  Passive = require('./api/models/wavenPassiveModel'),
  Transfer = require('./api/models/wavenTransferModel'),
  Spell = require('./api/models/wavenSpellModel'),
  Fellow = require('./api/models/wavenFellowModel'),
  WeaponType = require('./api/models/wavenWeaponTypeModel'),
  Weapon = require('./api/models/wavenWeaponModel'),
  Race = require('./api/models/wavenRaceModel'),
  routes = require('./api/routes/wavenApiRoutes');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Wavendb', { useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register routes

app.listen(port);

console.log('Waven RESTful API server started on: ' + port);
