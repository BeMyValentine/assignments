
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")))

var bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: false,
        bountyAmount: 100000,
        type: "Jedi",
        id: uuid.v4()

    },
    {
        firstName: "Darth",
        lastName: "Vader",
        living: false,
        bountyAmount: 100,
        type: "Sith",
        id: uuid.v4()
    }
];

app.get("/bounty", function (req, res) {
    res.send(bounties);
});

app.get("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            return res.send(bounties[i]);
        }
    }
    res.status(404).send({
        message: "Not Found"
    });
});


app.post("/bounty", function (req, res) {
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newbounty);
    res.send(newBounty);
});


app.put("bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            (bounties[i] === updateBounty)

            return res.send(updateBounty);


        }
        res.status(404).send({
            message: "FIX YOURSELF"
        });

    }
});

app.delete("bounty/:bountyId", function (req, res) {

    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(bounties[i], 1)
            return res.send(bounties);
        }
    }
});

app.listen(9002, function (req, res) {
    console.log("Server over 9000 reporting for duty");

});