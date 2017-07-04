var angApp = angular.module('curiosity', []);
angApp.controller('MainController', ['$scope', 'marsPhotosMain','$http', function($scope, marsPhotosMain,$http) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.sol = 1;
		$scope.solDisplay = 'Sol ' + $scope.sol;
		$scope.solDecr = function(){
			if ($scope.sol > 1){
				$scope.sol--;
				$scope.solDisplay = 'Sol ' + $scope.sol;
			}
		};
		$scope.solIncr = function(){
				$scope.sol++;
				$scope.solDisplay = 'Sol ' + $scope.sol;
		};
		$scope.solDisplayChanged = function(){
			var extractedSol = $scope.solDisplay.replace ( /[^\d.]/g, '' );
			if (extractedSol != null && extractedSol > 0) {
				$scope.sol = extractedSol;
				$scope.solDisplay = 'Sol ' + $scope.sol;
			}
		};
		$scope.$watch('sol', function(newVal, oldVal){
	    console.log("Sol was changed to:"+newVal);
	    $scope.sol.watch = newVal;

			marsPhotosMain.get($scope.sol)
			.success(function(data) {
				if (data == ""){
					$scope.mastCam = "img/photoNotFound.png"
				}
				else{
					$scope.mastCam = data;
				}
				console.log("Success: "+ data);
			})
			.error(function(data) {
					console.log('Error: ' + data);
				});
	  });
	}]);

angApp.factory('marsPhotosMain', ['$http', function($http) {
  return {
  			get : function(sol) {
  				return $http.get('/api/todos/' + sol);
  			},
  			create : function(todoData) {
  				return $http.post('/api/todos', todoData);
  			},
  			delete : function(id) {
  				return $http.delete('/api/todos/' + id);
  			}
  		}
}]);
