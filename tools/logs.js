'use strict'

const basicAuth = require('basic-auth'),
      fs        = require('fs');

exports.logs = function(req, res, next) {
    var str = new Date() + ';';
    if (basicAuth(req))
        str += basicAuth(req).name;
    str += ";" + req.method + ';' + req.originalUrl + ';';
    if (req.body && req.body.name)
        str += req.body.name;
    console.log(str + ';');
    return next();
}
