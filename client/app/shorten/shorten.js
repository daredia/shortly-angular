angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.displayType = 'none';
  $scope.isSuccess = false;
  $scope.isError = false;

  $scope.addLink = function() {
    Links.addOne({url: $scope.newLink})
      .then(function(response) {
        if (response.status === 500) {
          $scope.isSuccess = false;
          $scope.isError = true;
        } else {
          $scope.isSuccess = true;
          $scope.isError = false;
          $scope.link = response.data;
        }
      })
      .catch(console.error.bind(console));
  };
});
