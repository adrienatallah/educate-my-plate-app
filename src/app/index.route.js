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
      .when('/about', {
        templateUrl: 'app/views/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .when('/submit', {
        templateUrl: 'app/views/submit/submit.html',
        controller: 'SubmitController',
        controllerAs: 'submit'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();