var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 9000;
var addItem = require ("./middle");


app.use(addItem)

