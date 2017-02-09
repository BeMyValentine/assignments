var app = angular.module("badgeApp", []);

app.controller("badgeController", ["$scope", function ($scope) {
    
     //this empties the input boxes

    $scope.addPerson = function () {
        $scope.Person = $scope.newPerson;
        $scope.newPerson = {};
        

    }
}]);