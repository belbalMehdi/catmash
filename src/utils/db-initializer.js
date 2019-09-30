const Cat = require('../models').Cat;
const cats = require('../../data/cats.json').images;

/**
 * Initilisation du schema "Catmash" de la base de données depuis un fichier json fournit data/cats.json si celle ci est vide 
 */

async function initializeCollection(){
    try {
        let counts = await Cat.countDocuments();
        if(!counts){
            cats.forEach(async (cat) => {
                await new Cat(cat).save();
            });
        }
    } catch (error) {
        console.log(error);
    }

}


module.exports = initializeCollection;