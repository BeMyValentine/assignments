var readline = require("readline-sync");

var word = readline.question("Input a word?");


function addWord(word) {

    var dictionary = {};

    for (var j = 0; j < dictionary.length; j++) {
        var newWords = [];
    }
    if (word.toUpperCase !== dictionary.toUpperCase) {
        newWords.push(word);
        readline.question("What does that word mean?")
    } else {
        readline.prompt("That word is already in our dictionary.")
    }


}


addWord(word);


//create a function

//if word is in my object pull up definition
//if word isn't in my object ask user if he would like to add it



