var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;


var monkeyRoutes = require("./routes/monkeyRoutes");

app.use(bodyParser.json());


app.use("/monkey", monkeyRoutes);
app.use("/tiger", tigerRoutes);

app.listen(port, function() {
    console.log("App is listening on port " + port);
});