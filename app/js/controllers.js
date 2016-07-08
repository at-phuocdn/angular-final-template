'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('AppController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for App
    var url = 'data/service.json';
      $http.get(url).success(function (response) {
        $scope.services = response;
      });
  $scope.toggleActive = function(s){
    s.active = !s.active;
  };
  $scope.total = function(){

    var total = 0;

    // Use the angular forEach helper method to
    // loop through the services array:

    angular.forEach($scope.services, function(s){
      if (!s.active){
        total+= parseInt(s.price);
      }
    });
    return total;
  };
}]);

templateControllers.controller('AboutController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for About
    var url = 'data/profile.json';
    $http.get(url).success(function (response) {
    $scope.profile = response;
  });
}]);
