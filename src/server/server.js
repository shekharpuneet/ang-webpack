

var http          =  require('http');
var path          =  require('path');
var ymlPath       =  path.resolve('./config','config.yml');
var config        =  require('./readYamlConfig')(ymlPath); //yml config converted to json
var express       =  require('express');

http.globalAgent.maxSockets = Infinity; //setting max. concurrrent requests to infinity

var app = express();
require('./serverSettings')(app,config);
