(function() {
  'use strict';

  angular
      .module('educateMyPlate')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }
    ];

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

    this.getTec = getTec;
    this.getMain = getMain;

    function getTec() {
      return data;
    }

    function getMain() {
      return main;
    }
  }

})();
