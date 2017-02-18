angular.module("bountyApp")
    .controller("bountyController", ["bountyService", function ($scope, bountyService) {



        $scope.postBounty = function () {

            bountyService.addBounty(bounties).then(function (response) {
                $scope.whatever = response.data
            })
        }



}])