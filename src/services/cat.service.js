const Cat = require('../models').Cat;
const randomTwoCat = require('../utils/cats-randomizer').randomTwoCat;
const logger = require('../factories/logger-factory').loggerFactory("Cat-Service");

/** Service de recuperation de deux chat au hasard pour l'affrontement */
exports.getTwoCat = async function(){
    try{
        let encounterCats = [];
        let catCount = await Cat.countDocuments();
        let catsId = randomTwoCat(0, catCount);
        encounterCats.push(... await Cat.find().limit(1).skip(catsId[0]));
        encounterCats.push(... await Cat.find().limit(1).skip(catsId[1]));
    }catch(error){
        logger.error(error);
        throw error;
    }
    return encounterCats;
}