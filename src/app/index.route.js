(function() {
  'use strict';

  angular
    .module('educateMyPlate')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    // $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/menu/about', {
        templateUrl: 'app/views/menu/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/menu/contact', {
        templateUrl: 'app/views/menu/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .when('/menu/submit', {
        templateUrl: 'app/views/menu/submit/submit.html',
        controller: 'SubmitController',
        controllerAs: 'submit'
      })
      .when('/politics', {
        templateUrl: 'app/views/politics/politics.html',
        controller: 'PoliticsController',
        controllerAs: 'politics'
      })
      .when('/eat', {
        templateUrl: 'app/views/eat/eat.html',
        controller: 'EatController',
        controllerAs: 'eat'
      })
      .when('/find', {
        templateUrl: 'app/views/find/find.html',
        controller: 'FindController',
        controllerAs: 'find'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();