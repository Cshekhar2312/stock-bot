module.exports = function (app, crawlerService) {
    app.get('/crawler/start', function (req, res) {
        crawlerService.start(function (result) {
            res.json(result);
        });
    });

    app.get('/crawler/status', function (req, res) {
        crawlerService.status(function (result) {
            res.json(result);
        });
    });

    app.get('/crawler/stop', function (req, res) {
        crawlerService.stop(function (result) {
            res.json({running : false});
        });
    });



};