/**
 * module app contenant le squelette de base de l'application express
 * ainsi que tout les middlewares utilisé 
 */

const express = require('express');
const logger = require('./config').loggerFactory('server', {level:'info'})

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json({appname:'catmash'});
})


module.exports = app;