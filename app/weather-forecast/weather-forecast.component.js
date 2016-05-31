'use strict';

// Register `weatherForecast` component, along with its associated controller and template
angular.
  module('weatherForecast').
  component('weatherForecast', {
    templateUrl: 'weather-forecast/weather-report.template.html',
    controller: ['$scope', '$routeParams', 'City', 'Weather',
      function WeatherForecastController($scope, $routeParams, City, Weather) {
        var self = this;
        self.city = City.city;
        self.days = $routeParams.days || '2';
        self.weatherResult = Weather.getWeather(self.city, self.days);

        self.convertToFahrenheit = function(degK) {
          return Math.round((1.8 * (degK - 273)) + 32);
        }

        self.convertToDate = function(dt) {
          return new Date(dt* 1000);
        }

        self.test = Weather.test;

      }
    ]
  });
