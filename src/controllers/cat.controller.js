const CatService = require('../services/cat.service');

/** Controlleur de recuperation de deux chat au hasard pour l'affrontement
 * @param : request et response  fournit par le router
 * @out : reponse avec un content type application/json le body de la reponse contient un tableau d'object de type chats.
 */
exports.getEncounter = async function(req, res){
    try {
        let encounterCats = await CatService.getTwoCat();
        res.json(encounterCats);
    } catch (error) {
        res.json({error});  
    }
}

/** Controlleur de recupération du classement des chats par votes 
 * @param : request et response  fournit par le router
 * @out : reponse avec un content type application/json le body de la reponse contient un tableau d'object de type chats.
 */
exports.getRanking = async function(req, res){
    try {
        let catsRanking = await CatService.getCatsRanking();
        res.json(catsRanking);
    } catch (error) {
        res.json({error});  
    }
}

/** Controlleur de vote pour un chat depuis un affrontement 
 * @param : request et response  fournit par le router
 * @Body : request.body doit contenir l'id du chat pour lequel le vote doit etre effectuer.
 * @out : reponse avec un content type application/json le body de la reponse contient un tableau d'object de type chats.
 */
exports.updateRating = async function(req, res){
    try {
        let cat = await CatService.voteForCat(req.body.id);
        res.json(cat);
    } catch (error) {
        res.json({error});
    }
}