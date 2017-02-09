angular.module("clickerApp", [])
    .controller("clickController", ["$scope", "redService", "blueService", function ($scope, redService, blueService) {

        $scope.redCount = redService.redFinal;
        $scope.blueCount = blueService.blueFinal;


        $scope.addRed = function () {
            $scope.redCount = redService.increment();
            $scope.blueCount = blueService.decrement();

            if ($scope.blueCount <= 0) {
                $scope.blueCount = blueService.reset()
                $scope.redCount = redService.reset();
            }


        }

        $scope.addBlue = function () {
            $scope.blueCount = blueService.increment();
            $scope.redCount = redService.decrement();

            if ($scope.redCount <= 0) {
                $scope.redCount = redService.reset()
                $scope.blueCount = blueService.reset();
            }




        }

    }])