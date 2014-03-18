'use strict';

angular.module('monitorWebApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-flot',
  'angular-momentjs',
  'ui.date'
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
