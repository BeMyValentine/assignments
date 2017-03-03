angular.module("ponyApp")
    .controller("mainController", ["ponyService", "$scope", function (ponyService, $scope) {

        $scope.hello = "Welcome to the wonderful world of MY LITTLE PONY!!!";


    }]);


