angular.module("weatherApp", ["ngRoute"])
    .config(function ($routeProvider) {


        $routeProvider
            .when("/home", {
                templateUrl: "index.html",
                controller: "mainController"
            })
            .when("/weekly", {
                templateUrl: "content/7-day.html",
                controller: "weatherController"
            })




    })