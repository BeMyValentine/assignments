angular.module("weatherApp")
    .controller("hourlyController", ["$scope", "HTTPService", function ($scope, HTTPService) {

        HTTPService.getRequest().then(function (response) {

            var weather = response.data.hourly.data;
            $scope.day = weather;
        })



    }]);