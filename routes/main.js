/**
 * Created by CMehta on 1/8/2017.
 */
var crawlerService = require('../services/crawler');

module.exports = function (app) {
    require('./root')(app);
    require('./crawler')(app, crawlerService);
};
