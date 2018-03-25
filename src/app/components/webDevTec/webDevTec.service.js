(function () {
  'use strict';

  angular
    .module('educateMyPlate')
    .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {

    var env =
      {
        'dev': 'http://localhost:9191'
      }

    var main = [
      {
        'title': 'Politics & Policy',
        'url': '#politics',
        'description': 'Basics and history of food policy in America.',
        'logo': 'angular.png'
      },
      {
        'title': 'What to Eat',
        'url': '#eat',
        'description': 'what to eat and such',
        'logo': 'browsersync.png'
      },
      {
        'title': 'Find My Food',
        'url': '#find',
        'description': 'the right food search engine',
        'logo': 'gulp.png'
      }
    ];

    this.getEnv = env;
    this.getMain = getMain;

    function getEnv() {
      return env;
    }

    function getMain() {
      return main;
    }
  }

})();
