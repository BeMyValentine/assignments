var app=angular.module("yodaApp",[]);


app.controller("yodaController", ["$scope", "$http", function($scope, $http) {
    var url="https://yoda.p.mashape.com/yoda?sentence=You will learn how to speak like Yoda someday"
    $http.get(url).then(function (response){
        $scope.speak = response.data
        
        
    })
    
    
    
}]);