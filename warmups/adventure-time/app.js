var readline = require("readline-sync");


var name = readline.question("What is your name?");
var place = readline.question("Where do you come from " + name + "?");

var game = readline.question("Would you like to go on an adventure?" + " (Type 'yes' to begin)");

if (game === "yes") {
    console.log("Then let's get started!");
} else {
    console.log("Come back when you are ready.");
};


var player = {
    health: 0,
};

var isAlive = true;

while (isAlive = true) {
    option();
    choice();
    death();
};


function option() {


};



function choice() {
    var answer = readline.keyIn("press y for yes, n for no and q to quit", {
        limit: 'ynq'
    })

    if (answer === "y") {
        console.log("I'm working");

    } else if (answer === "n") {
        console.log("I'm still working");
    } else if (answer === "q") {
        player.health = 0
    }

};

function death() {
    if (player.health > 0) {
        isAlive = true;
    } else {
        isAlive = false;
    }
    if (isAlive = false) {
        console.log("Looks like your adventure ends here " + name)
    };
}