'use strict';
module.exports = function(app) {
  var wavenNews = require('../controllers/wavenNewsController.js');
  var wavenElement = require('../controllers/wavenElementController.js');
  var wavenBuff = require('../controllers/wavenBuffController.js');
  var wavenPassive = require('../controllers/wavenPassiveController.js');
  var wavenTransfer = require('../controllers/wavenTransferController.js');
  var wavenSpell = require('../controllers/wavenSpellController.js');
  var wavenFellow = require('../controllers/wavenFellowController.js');
  var wavenWeaponType = require('../controllers/wavenWeaponTypeController.js');
  var wavenWeapon = require('../controllers/wavenWeaponController.js');
  var wavenRace = require('../controllers/wavenRaceController.js');

  // wavenApi Routes
  app.route('/news')
    .get(wavenNews.list_all_news)
    .post(wavenNews.create_a_news);

  app.route('/news/:newsId')
    .get(wavenNews.read_a_news)
    .put(wavenNews.update_a_news)
    .delete(wavenNews.delete_a_news);


  app.route('/elements')
    .get(wavenElement.list_all_elements)
    .post(wavenElement.create_an_element);

  app.route('/elements/:elementId')
    .get(wavenElement.read_an_element)
    .put(wavenElement.update_an_element)
    .delete(wavenElement.delete_an_element);


  app.route('/buffs')
    .get(wavenBuff.list_all_buffs)
    .post(wavenBuff.create_a_buff);

  app.route('/buffs/:buffId')
    .get(wavenBuff.read_a_buff)
    .put(wavenBuff.update_a_buff)
    .delete(wavenBuff.delete_a_buff);


  app.route('/passives')
    .get(wavenPassive.list_all_passives)
    .post(wavenPassive.create_a_passive);

  app.route('/passives/:passiveId')
    .get(wavenPassive.read_a_passive)
    .put(wavenPassive.update_a_passive)
    .delete(wavenPassive.delete_a_passive);


  app.route('/transfers')
    .get(wavenTransfer.list_all_transfers)
    .post(wavenTransfer.create_a_transfer);

  app.route('/transfers/:transferId')
    .get(wavenTransfer.read_a_transfer)
    .put(wavenTransfer.update_a_transfer)
    .delete(wavenTransfer.delete_a_transfer);


  app.route('/spells')
    .get(wavenSpell.list_all_spells)
    .post(wavenSpell.create_a_spell);

  app.route('/spells/:spellId')
    .get(wavenSpell.read_a_spell)
    .put(wavenSpell.update_a_spell)
    .delete(wavenSpell.delete_a_spell);


  app.route('/fellows')
    .get(wavenFellow.list_all_fellows)
    .post(wavenFellow.create_a_fellow);

  app.route('/fellows/:fellowId')
    .get(wavenFellow.read_a_fellow)
    .put(wavenFellow.update_a_fellow)
    .delete(wavenFellow.delete_a_fellow);


  app.route('/weaponTypes')
    .get(wavenWeaponType.list_all_weaponTypes)
    .post(wavenWeaponType.create_a_weaponType);

  app.route('/weapons/:weaponId')
    .get(wavenWeaponType.read_a_weaponType)
    .put(wavenWeaponType.update_a_weaponType)
    .delete(wavenWeaponType.delete_a_weaponType);


  app.route('/weapons')
    .get(wavenWeapon.list_all_weapons)
    .post(wavenWeapon.create_a_weapon);

  app.route('/weapons/:weaponId')
    .get(wavenWeapon.read_a_weapon)
    .put(wavenWeapon.update_a_weapon)
    .delete(wavenWeapon.delete_a_weapon);


  app.route('/classes')
    .get(wavenRace.list_all_races)
    .post(wavenRace.create_a_race);

  app.route('/classes/:classId')
    .get(wavenRace.read_a_race)
    .put(wavenRace.update_a_race)
    .delete(wavenRace.delete_a_race);
};

