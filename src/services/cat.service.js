const Cat = require('../models').Cat;
const randomTwoCat = require('../utils/cats-randomizer').randomTwoCat;
const logger = require('../factories/logger-factory').loggerFactory("Cat-Service");

/** Service de recuperation de deux chats au hasard pour l'affrontement */
exports.getTwoCat = async function(){
    let encounterCats;
    try{
        encounterCats = [];
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

/** Service de recuperation du classement des chats par votes */
exports.getCatsRanking = async function(){
    let catsRanking;
    try{
        catsRanking = await Cat.find().sort({votes:-1});
    }catch(error){
        logger.error(error);
        throw error;
    }
    return catsRanking;
}

/** Service de vote pour un chat */
exports.voteForCat = async function(catId){
    let cat;
    if(!catId){
        logger.error(error);
        throw new Error("cat id is not defined in the request body");
    }
    try{
        cat = await Cat.findOne({id:catId});
        await cat.updateOne({$inc : {votes:1}})
    }catch(error){
        logger.error(error);
        throw error;
    }
    return cat;
}