var express     = require('express'),
    mongoose    = require('mongoose'),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser'),
    app         = express(),
    port        = process.env.PORT || 3000,
    Role        = require('./api/models/roleModel'),
    User        = require('./api/models/userModel'),
    News        = require('./api/models/wavenNewsModel'),
    Element     = require('./api/models/wavenElementModel'),
    Resource    = require('./api/models/wavenResourceModel'),
    Buff        = require('./api/models/wavenBuffModel'),
    Passive     = require('./api/models/wavenPassiveModel'),
    Transfer    = require('./api/models/wavenTransferModel'),
    Spell       = require('./api/models/wavenSpellModel'),
    Fellow      = require('./api/models/wavenFellowModel'),
    WeaponType  = require('./api/models/wavenWeaponTypeModel'),
    Weapon      = require('./api/models/wavenWeaponModel'),
    Race        = require('./api/models/wavenRaceModel'),
    routes      = require('./api/routes/wavenApiRoutes'),
    auth        = require('./tools/auth'),
    logs        = require('./tools/logs');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Wavendb', { useNewUrlParser: true });

// setup the logger
app.use(morgan('combined', { stream: logs.accessLogStream }));
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(auth.basic_auth);

routes(app); //register routes

app.listen(port);

console.log('Waven RESTful API server started on: ' + port);
