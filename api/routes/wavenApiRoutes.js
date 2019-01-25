    'use strict';

module.exports = function(app) {
    var auth = require('../../tools/auth.js');
    var role = require('../controllers/roleController.js'),
        user = require('../controllers/userController.js'),
        wavenNews = require('../controllers/wavenNewsController.js'),
        wavenElement = require('../controllers/wavenElementController.js'),
        wavenResource = require('../controllers/wavenResourceController.js'),
        wavenBuff = require('../controllers/wavenBuffController.js'),
        wavenPassive = require('../controllers/wavenPassiveController.js'),
        wavenTransfer = require('../controllers/wavenTransferController.js'),
        wavenSpell = require('../controllers/wavenSpellController.js'),
        wavenFellow = require('../controllers/wavenFellowController.js'),
        wavenWeaponType = require('../controllers/wavenWeaponTypeController.js'),
        wavenWeapon = require('../controllers/wavenWeaponController.js'),
        wavenRace = require('../controllers/wavenRaceController.js');

    // systemApi Routes
    app.route('/roles')
        .get(role.list_all_roles)
        .post(role.create_a_role);

    app.route('/roles/:roleId')
        .get(role.read_a_role)
        .put(role.update_a_role)
        .delete(role.delete_a_role);


    app.route('/users')
        .get(user.list_all_users)
        .post(user.create_a_user);

    app.route('/users/:userId')
        .get(user.read_a_user)
        .put(user.update_a_user)
        .delete(user.delete_a_user);

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

    app.route('/resources')
        .get(wavenResource.list_all_resources)
        .post(wavenResource.create_an_resource);

    app.route('/resourcess/:resourcesId')
        .get(wavenResource.read_an_resource)
        .put(wavenResource.update_an_resource)
        .delete(wavenResource.delete_an_resource);


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

    app.route('/weaponTypes/:weaponTypeId')
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

