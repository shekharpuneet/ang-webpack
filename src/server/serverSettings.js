
var express = require('express'),
    path = require('path'),
    compression = require('compression');

module.exports = function(app,config) {
    var rootPath = path.normalize(__dirname + '/../..');

    app.set('env',config.env);
    app.set('x-powered-by','Default');
    config.env === 'prod' || config.env === 'production' ? app.set('view cache',true) : app.set('view cache',false);
    app.use(express.static(path.join(rootPath, '.tmp')));
    app.use(express.static(path.join(rootPath, 'downloads')));

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', rootPath + '/src/client');
}

