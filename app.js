'use strict';

const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const http = require('http');
const port = (process.env.PORT || 8000);
require('dotenv').config();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', express.static(path.join(__dirname + '/public')));

const server = http.createServer(app);

server.listen(port, function () {
    console.log("Server with GUI up and running!");
});

module.exports = app;
