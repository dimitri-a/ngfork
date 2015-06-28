'use strict';

/**
 * @ngdoc overview
 * @name angularmainForkApp
 * @description
 * # angularmainForkApp
 *
 * Main module of the application.
 */
var app=angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

  app.config(function ($routeProvider) {
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
      .when('/validation', {
        templateUrl: 'views/customvalidation.html'
      })
      .when('/gutter', {
        templateUrl: 'views/gutter.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('_',window._);
