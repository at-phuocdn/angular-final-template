'use strict';

var templateControllers = angular.module('templateControllers', [
  'ngRoute'
]);

templateControllers.controller('HomeController', ['$scope', '$route',
  function ($scope, $route) {
    // Controller method for Home
    $scope.template = $route.current.templateUrl;
}]);

templateControllers.controller('AboutController', ['$scope', '$http',
  function ($scope, $http) {
    // Controller method for About
    var url = 'http://localhost:8000/data/profile.json';
    $http.get(url).success(function (response) {
    $scope.profile = response;
  });
}]);
