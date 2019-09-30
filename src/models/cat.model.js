const mongoose = require('mongoose');

/**
 * Schema Cat contenant: 
 * #id identifiant du chat
 * #url l'url de l'image du chat
 * #votes nombres de votes pour le chat cette valeur est initaliser à 0 a la création de l'entité
 */
const catSchema = mongoose.Schema({
    id: String,
    url: String,
    votes: {
        type: Number,
        default: 0
    }
});

exports.Cat = mongoose.model('Cat', catSchema);