const http = require('http');
require('dotenv').config();
const app = require('./app');
const logger = require('./factories').loggerFactory('server', {level:'info'})

const server = http.createServer(app);

server.listen(process.env.SERVER_PORT, ()=>{
    logger.info(`Server listening on port ${process.env.SERVER_PORT}`);
})