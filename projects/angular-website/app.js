angular.module("lolApp", ["ngRoute"])
    .controller("lolController", ["$scope", "$http", "HTTPService", function ($scope, $http, HTTPService) {
        
        $scope.league = HTTPService.getRequest
      
        
        



}])