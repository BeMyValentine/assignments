angular.module("ponyApp")
    .service("ponyService", ["$http", "$q", function ($http, $q) {


        this.ponyValidator = function (pony) {
            var deferred = $q.defer();
            if (pony.name.length <= 3) {
                deferred.reject("You need to input a longer pony name");
            } else if (pony.name === "" || pony.username === "" || pony.imgURL === "") {
                deferred.reject("Fill out the entire form");
            } else if (typeof pony.name === "number") {
                deferred.reject("None of MY little ponies have numbers in their names. Fix yourself Brony");
            } else {
                return this.newPony(pony)
            }
            return deferred.promise;
        };

        this.newPony = function (pony) {
            return $http.post("http://api.vschool.io/gabehare/pony", pony)
        }

    }]);




