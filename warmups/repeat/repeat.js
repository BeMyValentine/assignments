//write a function
//for loop to go throught the LENGTH of the string
//if statement saying that if the index of the string is greater than 0 ignore it and all like it
//if statement (IF the INDEX of the STRING is equal to 0, save it to an EMPTY array)
//console.log the first letter of the array


function repeat(string) {
    var ignore = "";
    var empty = [];
    for (var i = 0; i < string[i].length; i++) {
        if (string[i] > 0) {
            string[i] += ignore;
        } else {
            string[i].push(empty);
        }
    }
    return (empty[0]);
    console.log(empty[0]);
}

repeat(gggggggggxkjlfvskjfg)
