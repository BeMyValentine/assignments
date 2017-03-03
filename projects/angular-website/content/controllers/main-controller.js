angular.module("weatherApp")
    .controller("mainController", ["$scope", "HTTPService", function ($scope, HTTPService) {

        HTTPService.getRequest().then(function (response) {


            $scope.whatever = response.data;
            console.log($scope.whatever);
            $scope.currently = response.data.currently;


            $scope.weatherUpdate = function () {
                HTTPService.getRequest().then(function (response) {

                    $scope.whatever = response.data;
                    $scope.currently = response.data.currently;


                })
            }
            setInterval($scope.weatherUpdate, 1000000);

        })
        }])