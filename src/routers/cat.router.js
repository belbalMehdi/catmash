const Router = require('express').Router();
const CatController = require('../controllers').CatController;
/**
 * @route /encounter: route en GET qui renvoi deux chats en Versus
 * @route /rate: route en POST pour le vote sur un chat issus d'un encounter
 * @route /ranking: route en GET qui renvoi la liste des chats classé par votes. 
 */
Router.route('/encounter').get(CatController.getEncounter);
Router.route('/rate').patch(CatController.updateRating);
Router.route('/ranking').get(CatController.getRanking);

module.exports = Router;