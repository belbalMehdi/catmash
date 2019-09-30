function randomId(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

/**
 * Fonction de recupération de deux Id au hasard
 */
exports.randomTwoCat = function(min, max){
    let catIds = new Set();
    while(catIds.size<2){
        catIds.add(randomId(min, max));
    }
    return [...catIds];
}