angular.module("ponyApp", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "content/pages/home.html",
                controller: "mainController"
            })
            .when("/ponies", {
                templateUrl: "content/pages/pony.html",
                controller: "ponyController"
            })
            .otherwise({
                redirectTo: "/home"
            });

    });










