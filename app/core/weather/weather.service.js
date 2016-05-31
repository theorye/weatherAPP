'use strict';

angular.
  module('core.weather').
  factory('Weather', ['$resource',
    function($resource) {
      var apiKey = 'f9629e175f9f0f4c6a31cdb39eac0058';

      return {
        getWeather: function(city, days) {
          var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
                                      { callback: "JSON_CALLBACK"}, { get: {method: "JSONP"}});
          return weatherAPI.get({q: city, cnt: days, appid: apiKey});
        },
        test: 3
      }
    }
  ]);
