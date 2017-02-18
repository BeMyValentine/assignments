angular.module("bountyApp", [])

.service("bountyService", ["$http", function ($http) {
    
    var url = "http://localhost:9002/bounties"
    
    this.getBounties = function() {
        return $http.get("http://localhost:9002/bounties")
    }
    
    this.addBounty = function (bounties){
        $http.post(url, bounties) 
        
        
    }
    
}]);