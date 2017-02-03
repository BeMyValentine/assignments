var app = angular.module("hitList", []);
app.controller("listController", function ($scope, $http) {

    var url = "http://api.vschool.io:6543/hitlist.json";

    $http.get(url)
        .then(function (response) {

            console.log(response.data);
            $scope.hitList= response.data

        }, function (response) {

            console.log("there was an error: " + response.status + " " + response.statusText);
        })
})