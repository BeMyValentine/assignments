var readline = require("readline-sync");
var name = readline.question("What is your name? ");
console.log(name);
console.log("Hey " + name + " let's go on an adventure together! Grab your torch and pichfork. We are going hunting!\n Received torch \n Received pitchfork")
console.log("Press w to begin walking");

function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var key = readlineSync.keyIn("w");

function walk() {
    var w = true
    while (w === true) { 
        getRandomInt (4, 1);
        if (getRandomInt === 1){
            w === false;
            
        }
    } 
    
})





//use as many functions as you can