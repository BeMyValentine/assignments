angular.module("stateApp", ["ngRoute"])
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "home/home.html",
                controller: "homeController"
            })
            .when("/about", {
                templateUrl: "about/about.html",
                controller: "aboutController"
            })
            .when("/features", {
                templateUrl: "features/features.html",
                controller: "featureController"
            })
            .otherwise({
                redirectTo: "/home"
            });

    }])