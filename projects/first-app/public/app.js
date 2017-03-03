angular.module("firstApp", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "content/home/home.html",
                controller: "mainController"
            })
            .when("/login", {
                templateUrl: "content/login/login.html",
                controller: "userController"
            })
            .otherwise({
                redirectTo: "/home"
            })



    });