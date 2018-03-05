(function() {
  'use strict';

  angular
    .module('educateMyPlate')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
