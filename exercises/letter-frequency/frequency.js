var phrase = 'slimy smelly solution';


// function that takes a string and outputs the num of occurances of each letter in the string
function letterCount(str) {
    //create object for keeping track of the letter count
    var amount = {};
    var uniques = "";

    //loop through the string to get access to each letter
    for (var i = 0; i < str.length; i++) {
        //Create or update a property on the letter count object
        //If that object already had that letter, increment it by 1
        if (amount[str[i]] !== undefined) {
            amount[str[i]]++;
        } else {
            amount[str[i]] = 1;
            uniques += [str[i]];
        }
        //else create a new property for that letter and set it to 1
    }
    //print out the letter and the number of times that letter was found

    console.log(amount);
    console.log(uniques);
    return amount;
}

function sortFrequency(amount) {
    var sortedKeys = Object.keys(amount);
    var sortedArrayByCount = sortedKeys.sort(function (a, b) {
        return amount[b] - amount[a];

    });
    var sortedFrequency = {};
    for (var i = 0; i < sortedKeys.length; i++) {
        sortedFrequency[sortedKeys[i]] = amount[sortedKeys[i]];
    }
    return sortedFrequency;
}
console.log(sortFrequency(letterCount(phrase)));

lettercount(phrase)