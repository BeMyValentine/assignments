var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var User = require("../models/userModel");
var userRoute = express.Router();



userRoute.post("/", function (req, res) {
    var user = new User(req.body);

    user.save(function (err, person){
        if (err) return res.status(500).send;
        console.log(person);
        res.send(person);
    })
});

module.exports = userRoute;