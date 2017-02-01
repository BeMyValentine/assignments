var readline = require("readline-sync")



var dictionary = {};






}
//create an object
//create a function

//make sure that my loop ignores case of each letter

//if word is not in my object, add it to my object
//if word is already in my object, delete the input/replace it
//if it isn't in my object already prompt user to create a definition for the word 
//if it is in my object, inform user that the word is already on file

//allow user input

//create a function

//if word is in my object pull up definition
//if word isn't in my object ask user if he would like to add it


function findWord(word) {
    if (dictionary[word] === undefined) {
        addWord();
    } else(word === dictionary[word]) {
        console.log(word + " means: " + dictionary[word]);

    }

}



function addWord(word, definition) {
    dictionary[word] === definition;

}

