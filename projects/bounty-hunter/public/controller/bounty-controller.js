angular.module("bountyApp", [])
    .controller("bountyController", ["$scope","bountyService", function ($scope, bountyService) {

        $scope.bounties = [];

        $scope.postBounty = function (target) {

            bountyService.addBounty(target).then(function (response) {
                $scope.bounties.push(response.data)
            })
        };
    }]);