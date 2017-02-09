angular.module("pokeApp", [])

.controller("pokeController", ["$scope", "pokeService", function ($scope, pokeService) {

    $scope.pokemen = pokeService.pokemons;
    $scope.addPokemon = function (character) {


        pokeService.addPokemon(character);

    }
    $scope.removePokemon = function (character) {
        
        pokeService.removePokemon(character);
        
    }




}])