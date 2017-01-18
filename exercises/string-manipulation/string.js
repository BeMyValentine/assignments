var readline = require("readline-sync");
var name = readline.question(" What is your name?"); 
name = name.toUpperCase();
console.log("Hi " + name + "! My name is Epsilon 4000.")
var age = readline.question("How old are you?", {
    hideEchoBack:true 
});
console.log("HOLY CRAP!!! " + name + " is " + age + " !!!");
var born = readline.question("Where were you born?")








