var express = require('express'),
    app = express();

require('./config');
require('./routes/main')(app);

var server = app.listen(config.nodePort, function () {
    'use strict';
    console.log("Server listening in port " + config.nodePort);
});


var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

