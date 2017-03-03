var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var Recipe = require("../models/recipe");
var recipeRoute = express.Router();
var request = require("request");



recipeRoute.get("/random", function (req, res) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var randomPage = getRandomInt(1, 4500);
    var randomIndex = getRandomInt(0,29);

    request("http://food2fork.com/api/search?key=2220691e4a665b36da3c53b227b3dc40&page=" + randomPage, function (error, response, body){
        if (error) throw error;
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            console.log(data.recipes[randomIndex]);
            res.send(data.recipes[randomIndex])

    }});
    // Use the `request` package to get a list of results from food2fork on page `randomPage`
    // choose a random result from the 30 that come back by indexing into the array at index `randomIndex`
    // return that random result
});
//
// recipeRoute.get("/:id", function (req, res) {
//     Recipe.findById(req.params.id, function (err, recipe) {
//         if (err) return res.send(500).status;
//         res.send(recipe);
//     });
// });
//
// recipeRoute.post("/", function (req, res) {
//     var recipe = new Recipe (req.body);
//
//     recipe.save(function (err, recipe) {
//         if (err) return res.send(500).status;
//         res.send(recipe);
//     });
// });
//
// recipeRoute.put("/:id", function (req, res) {
//     Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, update) {
//         if (err) return res.send(500).status;
//         res.send(update);
//     })
// });
//
// recipeRoute.delete("/:id", function (req, res) {
//     Recipe.findByIdAndRemove(req.params.id, function (err, recipe) {
//         if (err) return res.send(500).status;
//         res.send(recipe);
//     })
// });


module.exports = recipeRoute;