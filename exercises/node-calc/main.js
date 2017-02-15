var readline = require("readline-sync");

var add = require("./add");
var Subtractor = require("./sub");
var mul = require("./mul").mul;
var div = require("./div");
var exp = require("./exp");


function calculator(number1, number2, operation) {
    switch (operation) {
    case "add":
        return add(number1, number2);
        break;
    case "sub":
        return sub(number1, number2);
        break;
    case "mul":
        return mul(number1, number2);
        break;
    case "div":
        return div(number1, number2);
        break;
    case "exp":
        return exp(number1, number2);
        break;
    }
}


console.log(whatever(1, 3));