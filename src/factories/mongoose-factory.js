const mongoose = require('mongoose');
const logger = require('../factories').loggerFactory('mongoose', {level:'info', useUnifiedTopology:true})

/**
 * Factory de connection a la base de données mongo
 * la fonction connect prends l'url de connexion a la base sous format string
 */

mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {useNewUrlParser: true});
const database = mongoose.connection;

database.once('open', ()=>{
    logger.info('Connection with mongo database established');
});

database.on('error', (err)=>{
    logger.error(err);
});

exports.database = database;