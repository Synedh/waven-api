'use strict';

module.exports = function(app) {
    const uploadTool = require('../controllers/uploadToolController');

    app.route('/uploadImage')
        .get(uploadTool.page);
}