angular.module("ponyApp")
    .controller("ponyController", ["ponyService", "$http", "$scope", function (ponyService, $http, $scope) {

        $scope.welcome = "LOOK AT ALL THE PONIES!!";
        $scope.ponies = [];


        $scope.addPony = function (pony) {
            ponyService.ponyValidator(pony).then(function (response) {
                $scope.ponies.push(response.data);
            }, function (reason){
                $scope.message = reason;
            })
        };


    }]);

