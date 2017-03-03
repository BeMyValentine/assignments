var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 9002;
var mongoose = require("mongoose");
var Vote = require("./models/vote-models");
var path = require("path");

app.use(express.static(path.join(__dirname, "public")));


mongoose.connect("mongodb://localhost/vote", function (err) {
    if (err) throw err;

    console.log("Connected to the database!");
});

app.use(bodyParser.json());
app.use("/vote", require("./routes/vote-routes"));

app.listen(port, function () {
    console.log("Server " + port + " reporting for duty");

});