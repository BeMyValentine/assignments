angular.module("bountyApp", [])

.service("bountyService", ["$http", function ($http) {
    this.getBounties = function() {
        return $http.get("http://localhost:9002/bounties")
    }
}]);