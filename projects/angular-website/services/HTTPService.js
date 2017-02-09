angular.module("weatherApp")
    .service("HTTPService", ["$http", "$sce", function ($http, $sce) {
        
        this.info = [];

        var url = "https://api.darksky.net/forecast/40060965fc9611af86b2b08dde10fcd2/37.8267,-122.4233"


        this.getRequest = function () {
            

            $http.jsonp($sce.trustAsResourceUrl(url)).then(function (response) {

                    this.info.push(response.data);

                    console.log(response.data);
                }

            )
        }



    }])