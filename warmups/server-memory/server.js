var express = require ("express");
var app = express();
var mongoose = require ("mongoose");
var port = process.env.PORT || 8000;
var bodyParser = require ("body-parser");
var morgan = require ("morgan");


app.use(bodyParser.json());
app.use(morgan("dev"));



mongoose.connect("mongodb://localhost/cars", function (err) {
    if (err) throw err;

    console.log("Connected to monGOD")
});



app.use("cars", require ("./routes/cars-routes"));
app.use("persons", require("./routes/persons-routes"));

app.listen(port, function () {
    console.log("Server " + port + " spinning up")
});
