'use strict';

/**
 * @ngdoc overview
 * @name angularmainForkApp
 * @description
 * # angularmainForkApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/richlist.html',
        controller: 'RichListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('_',window._);
