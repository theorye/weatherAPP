'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('home').
  component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$scope', '$location', 'City',
      function Home($scope, $location, City) {
        var self = this;
        self.city = City.city;
        $scope.$watch('$ctrl.city', function() {
          City.city = self.city;
        });

        $scope.submit = function() {
          $location.path("/forecast");
        }

      }
    ]
  });
