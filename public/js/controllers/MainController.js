/*appNg.controller('MainController', ['$scope', 'marsPhotosMain','$http', function($scope, marsPhotosMain,$http) {
		$scope.formData = {};
		$scope.loading = true;
		
		marsPhotosMain.get()
		.success(function(data) {
			$scope.mastCam = data;
			console.log("Success: "+ data);
		})
		.error(function(data) {
				console.log('Error: ' + data);
			});

	}]);*/
