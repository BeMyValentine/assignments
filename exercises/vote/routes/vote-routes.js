var express = require("express");
var Issue = require("../models/vote-models");
var issueRoutes = express.Router();


issueRoutes.get("/", function (req, res) {

    Issue.find(function (err, issues) {
        if (err) return res.status(500).send(err);
        res.send(issues);
    })

});

issueRoutes.get("/:issueId", function (req, res) {
    Issue.findById(req.params.issueId, function (err, issue) {
        if (err) return res.status(500).send(err);
        res.send(issue);
    })
});

issueRoutes.post("/", function (req, res) {
    var issue = new Issue(req.body);

    issue.save(function (err, issue) {
        if (err) return res.status(500).send(err);
        res.status(201).send(issue);
    })
});

issueRoutes.put("/:issueId", function (req, res) {
    Issue.findOneAndUpdate({_id: req.params.issueId}, req.body, {new: true}, function (err, updatedIssue) {
        if (err) return res.status(500).send(err);
        res.send(updatedIssue);
    })
});

issueRoutes.delete("/:issueId", function (req, res) {
    Issue.findOneAndRemove({_id: req.params.issueId}, function (err, issue) {
        if (err) return res.status(500).send(err);
        res.send({message: "Successfully deleted the issue...you commie"})
    })
});

module.exports = issueRoutes;