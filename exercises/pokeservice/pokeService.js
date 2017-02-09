angular.module("pokeApp")

.service("pokeService", function () {
    this.pokemons = [];
    
    
    this.addPokemon = function(pokemon) {
        this.pokemons.push(pokemon);
    }
    this.removePokemon = function (pokemon) {
        this.pokemons.splice(this.pokemons.indexOf(pokemon), 1)
    }
    
})