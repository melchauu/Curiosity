var angApp = angular.module('curiosity', []);
angApp.controller('MainController', ['$scope', 'marsPhotosMain','$http', function($scope, marsPhotosMain,$http) {
		$scope.formData = {};
		$scope.loading = true;

		$scope.sol = 1;
		$scope.solDispUpdate = function(){return 'Sol '  + $scope.sol;}
		$scope.solDisplay = $scope.solDispUpdate();

		$scope.hrs = 0;
		$scope.hrsDispUpdate = function(hours){
			return ((hours < 10)?("0" + hours + ":00"):(hours + ":00"));
		};
		$scope.hrsDisplay = $scope.hrsDispUpdate($scope.hrs);
		$scope.solDecr = function(){
			if ($scope.sol > 1){
				$scope.sol--;
				$scope.solDisplay = $scope.solDispUpdate();
			}
		};
		$scope.solIncr = function(){
				$scope.sol++;
				$scope.solDisplay = $scope.solDispUpdate();
		};

		$scope.solDisplayChanged = function(){
			var extractedSol = $scope.solDisplay.replace ( /[^\d.]/g, '' );
			if (extractedSol != null && extractedSol > 0) {
				$scope.sol = extractedSol;
				$scope.solDisplay = $scope.solDispUpdate();
			}
		};

		$scope.hrsUpdate = function(offset){
			console.log("offset is "+ offset);
			console.log("hrs is "+ $scope.hrs);
			$scope.hrs= $scope.hrs + parseInt(offset);
			console.log("hrs is now "+ $scope.hrs);
			if ($scope.hrs > 23 ){
				$scope.sol++;
				$scope.solDisplay=$scope.solDispUpdate();
				$scope.hrs = 0;
			}
			$scope.hrsDisplay=$scope.hrsDispUpdate($scope.hrs);
		}
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
