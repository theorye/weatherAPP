'use strict';

angular.
  module('core.weatherReport').
  directive("weatherReport", function() {
    return {
      restrict: 'E',
      templateUrl: '/core/weatherReport/weather-report.template.html',
      replace: true,
      scope: {
        weatherDay: "=",
        convertToStandard: "&",
        convertToDate: "&",
        dateFormat: "@"
      }
    }
  });
