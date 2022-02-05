const http = require('http');

const workshop_01 = require('./src/workshop_01/workshop_01');
const workshop_02 = require('./src/workshop_02/workshop_02');

const port = '3000';

const server = http.createServer((req, res) => {
    res.end();
});

server.listen(port);