var app = angular.module("listApp", []);
app.controller("listController", ["$scope", "$http", function ($scope, $http) {

    var url = "http://api.vschool.io/gabehare/todo"
    $http.get(url).then(function (response) {
        $scope.toDos = response.data
    })

    $scope.itemInput = [];
    $scope.newItem = function (item) {



        $http.post(url, item).then(function (response) {
            $scope.toDos.push(response.data)
            $scope.toDos
        })
        $scope.itemInput.push(item)



        $scope.deleteItem = function () {
            $http.delete(url, item)
        }

        $http.delete(url, item).then(function (response) {
            $scope.toDos.remove(response.data)

        })
        $scope.itemInput.remove(item)




    }

}]);