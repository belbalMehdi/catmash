const http = require('http');
const app = require('./app');
const logger = require('./config').loggerFactory('server', {level:'info'})
require('dotenv').config();

const server = http.createServer(app);

server.listen(process.env.SERVER_PORT, ()=>{
    logger.info(`Server listening on port ${process.env.SERVER_PORT}`);
})