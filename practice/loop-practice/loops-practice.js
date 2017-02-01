var car = "Chevy";
for (var i = 0; i < car.length; i++)
    console.log(car[i])

function findLetter(word, letter) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            console.log("your letter was found at index "+word.indexOf(letter));
        } else if(i === word.length-1) {
            console.log("letter not found");
        }

    }

}
findLetter("firetruck", "k");
findLetter("oogleyboogley", "z")