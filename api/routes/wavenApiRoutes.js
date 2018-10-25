'use strict';
module.exports = function(app) {
  var wavenApi = require('../controllers/wavenApiController.js');

  // wavenApi Routes
  app.route('/classes')
    .get(wavenApi.list_all_races)
    .post(wavenApi.create_a_race);


  app.route('/classes/:classId')
    .get(wavenApi.read_a_race)
    .put(wavenApi.update_a_race)
    .delete(wavenApi.delete_a_race);
};
