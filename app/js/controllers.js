'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('AppController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for App
    $scope.list = [];
    var url = 'data/service.json';
      $http.get(url).success(function (response) {
        $scope.services = response;
      });
  $scope.toggleActive = function(s) {
    s.active = !s.active;
  };
  $scope.addService = function(id) {
    for(var i=0; i<$scope.services.length; i++) {
      if ($scope.services[i].id==id) {
        $scope.list.push($scope.services[i]);
      }
    }
  };
  $scope.total = function(){
    var total = 0;
    angular.forEach($scope.list, function(s) {
      if (s.active) {
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
