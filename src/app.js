/**
 * module app contenant le squelette de base de l'application express
 * ainsi que tout les middlewares utilisé 
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { CatRouter } = require('./routers');

const app = express();

/** Initalisation de la base de données si vide*/
require('./utils').dbInitilizer();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**
	Cors middleware active la permission de requetes cros origin issus de serveur/client tierce 
 */
app.use(cors());

/**
	Morgan middleware active les logs d'accés au serveur http 
 */
app.use(morgan('combined'));


/**
 * Mapping du CatRouter sur toutes les requêtes entrantes à l'application
 */
app.use(CatRouter);

module.exports = app;