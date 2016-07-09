angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.displayType = 'none';

  $scope.addLink = function() {
    Links.addOne({url: $scope.newLink})
      .then(function(response) {
        $scope.displayType = 'block';
        $scope.link = response.data;
      })
      .catch(console.error.bind(console));
  };
});
