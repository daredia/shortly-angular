angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(links) {
    $scope.data.links = [
    { "code" : "738dd", "url" : "http://www.google.com", "title" : "Google", "baseUrl" : "http://45.55.4.184:4568", "visits": 1},
    { "code" : "d76b7", "url" : "http://www.apple.com", "title" : "Apple", "baseUrl" : "http://45.55.4.184:4568", "visits": 7}
    ];
  })
  .catch(console.error.bind(console));
});
