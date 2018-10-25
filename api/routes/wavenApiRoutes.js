'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/wavenApiController');

  // wavenApi Routes
  app.route('/class')
    .get(wavenApi.list_all_classes)
    .post(wavenApi.create_a_class);


  app.route('/class/:classId')
    .get(wavenApi.read_a_class)
    .put(wavenApi.update_a_class)
    .delete(wavenApi.delete_a_class);
};
