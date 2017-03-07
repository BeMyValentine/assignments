angular.module("personalApp", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider
            .when("/home", {
                templateUrl: "pages/home.html",
                controller: "mainController"
            })
            .when("/about", {
                templateUrl: "pages/about.html",
                controller: "aboutController"
            })
            .when("/contact", {
                templateUrl: "pages/contact.html",
                controller: "contactController"
            })
            .otherwise({
                redirectTo: "/home"
            })

    });