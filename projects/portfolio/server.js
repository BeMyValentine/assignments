var express = require ("express");
var app = express();
var bodyParser = require ("body-parser");
var morgan = require ("morgan");
var port = process.env.PORT || 8000;
var mongoose = require ("mongoose");
var path = require ("path");


app.use(express.static(path.join(__dirname, "public")));



mongoose.connect("mongodb://localhost/pages", function(err) {
    if (err) throw err;

    console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(morgan("dev"));


app.listen(port, function () {
    console.log("Server listening on port " + port)
});