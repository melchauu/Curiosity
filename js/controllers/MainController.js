app.controller('MainController', ['$scope', 'marsPhotosMain', function($scope, marsPhotosMain) {
  marsPhotosMain.success(function(data) {
    $scope.mastCam = data;
  });
}]);