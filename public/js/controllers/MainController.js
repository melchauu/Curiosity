app.controller('MainController', ['$scope', 'marsPhotosMain', function($scope, marsPhotosMain) {
  marsPhotosMain.get()
    .success(function(data) {
        $scope.mastCam = data;
        console.log("asdfasdf "+data);
  });

}]);
