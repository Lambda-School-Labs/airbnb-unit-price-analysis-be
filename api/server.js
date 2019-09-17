const express = require('express');
// const apiRouter = require('./api/router');

const server = express();

const logger = (req, res, next) => {
    console.log(`${req.method} request was made to ${req.url}`)
    next();
};

server.use(express.json());

// server.use('/', logger, apiRouter);

module.exports = server;