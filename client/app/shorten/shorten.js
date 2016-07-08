angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {

    ////// MAKE DYNAMIC
    Links.addOne('https://reddit.com/r/javascript')
      .then(function(response) {
        // $scope.link = LINK_HERE;
      })
      .catch(console.error.bind(console));
  };
});
