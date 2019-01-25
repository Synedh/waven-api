'use strict'

const path  = require('path'),
      rfs   = require('rotating-file-stream');

exports.logs = function (tokens, req, res) {
    user = '';
    if (basicAuth(req))
        user = basicAuth(req).name;
    return [
        new Date(),
        user,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
}

// create a rotating write stream
exports.accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: path.join(__dirname, 'log')
});