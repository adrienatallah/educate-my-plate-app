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
      .otherwise({
        redirectTo: '/'
      });
  }

})();