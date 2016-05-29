// Services
weatherApp.service('cityService', function() {
  this.city = "Huntsville, AL";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  var apiKey = 'f9629e175f9f0f4c6a31cdb39eac0058';
  
  this.GetWeather = function(city, days) {
    
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
                               { callback: "JSON_CALLBACK"}, { get: {method: "JSONP"}});
    
    return weatherAPI.get({q: city, cnt: days, appid: apiKey});
    
  };
}]);