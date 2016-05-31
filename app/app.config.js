'use strict';

angular.
  module('weatherApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<home></home>'
        }).
        when('/forecast', {
          template: '<weather-report></weather-report>'
        }).
        when('/forecast/:days', {
          template: '<weather-report></weather-report>'
        }).
        otherwise('/');
    }
  ]);
