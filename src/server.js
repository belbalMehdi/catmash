const http = require('http');
const app = require('./app');
require('dotenv').config();

const server = http.createServer(app);

server.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
})