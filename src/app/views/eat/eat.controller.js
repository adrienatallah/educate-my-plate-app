(function () {
  'use strict';

  angular
    .module('educateMyPlate')
    .controller('EatController', EatController);

  /** @ngInject */
  function EatController($timeout, webDevTec, api) {
    var vm = this;

    vm.awesomeThings = [];

    init();

    function init() {
      // getWebDevTec();
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    vm.getProductInfo = function () {
      console.log('get product info');

      api.getInfoByBarcode('02200015934').then(function success(response) {
        console.log('response', response);

      }, function error(response) {
        console.log('error: ', error);
      });

    }
  }
})();