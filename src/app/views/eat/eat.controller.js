(function () {
  'use strict';

  angular
    .module('educateMyPlate')
    .controller('EatController', EatController);

  /** @ngInject */
  function EatController($timeout, webDevTec, api) {
    var vm = this;

    vm.awesomeThings = [];
    vm.barCode = '';
    vm.infoFound = false;

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
      if (vm.barCode.length < 1) {
        alert('enter barcode');
        return;
      } else {
        console.log('get product info for barcode: ', vm.barCode);
      }

      api.getInfoByBarcode(vm.barCode).then(function success(response) {
        console.log('response', response);
        vm.productInfo = response;
        vm.infoFound = true;

      }, function error(response) {
        vm.infoFound = true;
        console.log('error: ', error);
      });

    }
  }
})();