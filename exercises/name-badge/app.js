var app = angular.module("badgeApp", [])

app.controller("badgeController", function ($scope) {
    
    $scope.newPeople = [] //this empties the input boxes

    $scope.addPerson = function (item) {
        $scope.newPeople.push(item); //the properties were stated in the ng-model of the html
        if (userInput === "")
        

    }
});