var express = require('express'),
    app = express();

require('./config');
require('./routes/main')(app);

var server = app.listen(config.nodePort, function () {
    'use strict';
    console.log("Server listening in port " + config.nodePort);
});

