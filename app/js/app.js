'use strict';

// Declare our `templateApp` and its depends.
var templateApp = angular.module('templateApp', [
  'ngRoute',            // `ngRoute` is our good friend for routing
  'templateControllers' // This module contains all of our controllers
]);

templateApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/app', {
      templateUrl: 'view/app.html',
      controller: 'AppController'
    })
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'AboutController'
    })
    .otherwise({redirectTo: '/about'});
}]);
