'use strict';

angular.module('monitorWebApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'tc.chartjs',
  'angular-momentjs'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
