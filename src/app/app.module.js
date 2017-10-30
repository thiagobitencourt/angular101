import angular from 'angular';
import bootstrap from 'bootstrap';
import inputMasks from 'angular-input-masks';
import uiBootstrap from 'angular-bootstrap-npm';
import toastr from 'angular-toastr'; 

import uiRouter from '@uirouter/angularjs';

import appConfig from './app.config';
import '../assets/scss/style.scss';

import modules from './modules/modules.module';
// import compontes from './components/components.module';

angular.module('app', [ 
    uiRouter,
    toastr,
    uiBootstrap,
    inputMasks,
    modules
])
.config(appConfig);

// babel -> transpiler (ES6 -> ES5), webpack -> bundler.
// Task runner -> Gulp, Grunt (babel, browserify)