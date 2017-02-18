var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var things = [{
        name: "banana",
        type: "fruit",
        shape: "oblong"
},
    {
        name: "apple",
        type: "fruit",
        shape: "round"
    }
];

app.get("/thing", function (req, res) {
    for (var i = 0; i < things.length; i++) {
        return res.send(things);
    }
    res.status(418).send({
        message: "Im a little teapot"
    })
})

app.get("/thing/:thingid", function (req, res) {
    var filtered = [];
    for (var i = 0; i < things.length; i++) {
        if (req.params.name === things[i].name) {
            filtered.push(things[i])
            return res.send(filtered);
        }
    }
    res.status(404).send({
        message: "Not Found"
    })
});






app.listen(4000, function (req, res) {
    console.log("4K bby");
})