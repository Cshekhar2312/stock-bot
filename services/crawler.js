var fs = require('fs');
var Crawler= require('crawler');
var seedUrls = config.seesdURLs;
var depth = config.crawlDepth;


var c = new Crawler({
    maxConnections : 100,
    skipDuplicates:true,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            $('a[href]').each(function () {
                console.log(this.href);
                c.queue(this.href);
            });
        }
        done();
    }
});

var startCrawler = function (callback) {
    c.queue(seedUrls);
    callback({started:true});
}

module.exports = {
    start: startCrawler
};