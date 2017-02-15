angular.module("weatherApp")
    .controller("mainController", ["$scope", "HTTPService", function ($scope, HTTPService) {

        HTTPService.getRequest().then(function (response) {



            $scope.whatever = response.data;
            console.log($scope.whatever);
            $scope.currently = response.data.currently;
            console.log($scope.currently);


            $scope.weatherUpdate = function () {
                HTTPService.getRequest().then(function (response) {

                    $scope.whatever = response.data;
                    console.log($scope.whatever);
                    $scope.currently = response.data.currently;
                    console.log($scope.currently);
                })
            }
            setInterval($scope.weatherUpdate, 10000);

        })
        }])