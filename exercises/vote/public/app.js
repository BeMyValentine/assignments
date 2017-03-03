angular.module("voteApp")

    .service("mainService", ["$http", function ($http) {

        var url = "/vote";

        this.newOption = function (issue){
            return $http.post(url, issue)
        };
        this.showOptions = function (issues) {
            return $http.get(url, issues)
        };
        this.addBlue = function (issueId) {
            return http.put(url, issueId)
        }
        this.newComment = function (comment) {
            return $http.post(url, comment)
        }

    }]);