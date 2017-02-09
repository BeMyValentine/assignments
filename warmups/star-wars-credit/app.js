var app = angular.module("starApp", []);

app.controller("starController", ["$scope", "$http", function ($scope, $http) {
    var url = "http://swapi.co/api/films/1/"
    $http.get(url).then(function (response) {
        $scope.crawl = response.data.opening_crawl;
    })


}]);