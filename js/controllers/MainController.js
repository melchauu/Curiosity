app.controller('MainController', ['$scope', 'marsPhotosMain', function($scope, marsPhotosMain) {
  marsPhotosMain.success(function(data) {
    $scope.fiveDay = data;
  });
}]);