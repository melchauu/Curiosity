var angApp = angular.module('curiosity', []);
angApp.controller('MainController', ['$scope', 'marsPhotosMain','$http', function($scope, marsPhotosMain,$http) {
		$scope.formData = {};
		$scope.loading = true;

		$scope.sol = 0;
		$scope.solDecr = function(){
			if ($scope.sol > 0){
				$scope.sol--;
			}
		};
		marsPhotosMain.get()
		.success(function(data) {
			$scope.mastCam = data;
			console.log("Success: "+ data);
		})
		.error(function(data) {
				console.log('Error: ' + data);
			});

	}]);

angApp.factory('marsPhotosMain', ['$http', function($http) {
  return {
  			get : function() {
  				return $http.get('/api/todos');
  			},
  			create : function(todoData) {
  				return $http.post('/api/todos', todoData);
  			},
  			delete : function(id) {
  				return $http.delete('/api/todos/' + id);
  			}
  		}
}]);
