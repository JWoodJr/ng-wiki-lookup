
var app = angular.module('WikiLookup',[]);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.search = 'Socrates'

	$scope.runSearch = function () {

		$http.jsonp('https://en.wikipedia.org/w/api.php', {
	        params: { 
	            action: 'opensearch', 
	            search: $scope.search,
	            format: 'json',
	            callback: 'JSON_CALLBACK'}})
		.then(function(res) {

			if (res.data && res.data[1] && !res.data[1].length) {
				return $scope.noResult = true;
			}

			$scope.results = res.data;
			$scope.noResult = false;
		});
	}

	$scope.runSearch();
}]);