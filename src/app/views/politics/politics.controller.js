(function() {
  'use strict';

  angular
    .module('educateMyPlate')
    .controller('PoliticsController', PoliticsController);

  /** @ngInject */
  function PoliticsController(webDevTec) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1520211676686;

    init();

    function init() {
      getWebDevTec();
    }

    function showToastr() {
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

    }
  }
})();