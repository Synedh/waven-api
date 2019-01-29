'use strict'

const path  = require('path'),
      rfs   = require('rotating-file-stream');

// create a rotating write stream
exports.accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    maxFiles: 14,
    path: path.join(__dirname, 'log')
});