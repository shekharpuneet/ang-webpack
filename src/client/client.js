import 'angular-material/angular-material.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import routing from './client.config';
import home from './features/home';

angular.module('app',[uirouter,angularAnimate,angularAria,angularMaterial, home])
    .config(routing);
