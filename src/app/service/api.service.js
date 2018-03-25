(function () {
	'use strict';

	angular
		.module('educateMyPlate')
		.service('api', apiService);

	function apiService(webDevTec, $http, $q) {

		var baseUrl = webDevTec.getEnv.dev;

		console.log('base url: ', baseUrl);


		function _get(__service) {
			var _deferred = $q.defer();

			$http({
				method: "GET",
				url: baseUrl + __service
			}).then(function (__data) {
				if (__data)
					_deferred.resolve(__data.data)

			});
			return _deferred.promise;
		}

		var publicApi = {
			getInfoByBarcode: function (__code) {
				return _get('/search?code=' + __code);
			}
		};

		return publicApi;
	}

})();