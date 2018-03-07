(function() {
  'use strict';

  angular
    .module('educateMyPlate')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(webDevTec, $location) {
    var vm = this;

    vm.mainCards = [];


    //functions in view:
    vm.goToView = goToView;

    init();

    function init() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.mainCards = webDevTec.getMain();
    }

    function goToView(card){
      console.log('card: ', card);
      $location.path(card.url);
    }

  }
})();
