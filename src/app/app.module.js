import angular from 'angular';

import modules from './modules/modules.module';
// import compontes from './components/components.module';

angular.module('app', [ modules ]);

// babel -> transpiler (ES6 -> ES5), webpack -> bundler.
// Task runner -> Gulp, Grunt (babel, browserify)