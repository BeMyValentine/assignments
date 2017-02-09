var app = angular.module("uglyApp", []);

app.controller("uglyController", ["$scope", "$http", function ($scope, $http) {

    $scope.uglyList = [];

    $scope.addUgly = function () {
        $scope.uglyList.push($scope.ugly);
        
        $scope.ugly = {};




    }
}]);