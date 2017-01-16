var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
    var empty = [];
    alphabet = alphabet.toUpperCase();
    for (var i = [0]; i < people.length; i++) {
        empty.push(people[i] + ":")
        for (var j = [0]; j < alphabet.length; j++)
        {
            empty.push(alphabet[j]);
        }
    }
    return empty;
}
console.log(forception(people, alphabet));