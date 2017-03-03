angular.module("voteApp", [])
    .controller("mainController", ["$scope", "mainService", "additionService", function ($scope, mainService, additionService) {

        $scope.plusRed = 0;
        $scope.plusBlue = 0;
        $scope.options = [];
        $scope.comments = [];

        $scope.votingOptions = function (issues) {
            mainService.showOptions(issues).then(function (response) {
                $scope.options.push(response.data)
            })
        };

        $scope.postOption = function (issue) {
            mainService.newOption(issue).then(function (response) {
                $scope.options.push(response.data);

            })

        };

        $scope.addRed = function () {
            return $scope.plusRed += 1
        };

        $scope.addBlue = function () {
            return $scope.plusBlue += 1
        };

        $scope.addComment = function (comment) {
            mainService.newComment(comment).then(function (response) {
                $scope.comments.push(response.data)
            })
        }


    }]);