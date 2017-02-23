angular.module("bountyApp")

.service("bountyService", ["$http", function ($http) {
    
    var url = "/target";


    this.addBounty = function (target){
        return $http.post(url, target)

    }
    
}]);