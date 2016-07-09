angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.displayType = 'none';
  $scope.isSuccess = false;
  $scope.isError = false;

  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.addLink = function() {
    if ($scope.isValidUrl($scope.newLink)) {
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
    } else {
      $scope.isSuccess = false;
      $scope.isError = true;
    }
    
  };

  $scope.isValidUrl = function (url) {
    return url.match(rValidUrl);
  };
});




