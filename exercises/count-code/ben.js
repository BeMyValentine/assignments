var testString = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
for (var i = 0; i < alphabet.length; i += 1) {
    testString.push("co" + alphabet[i] + "e");
}

function countCode(string) {
    var checkString = "";
    var stringCount = 0;
    for (var i = 0; i < string.length; i += 1) {
        if (string[i] === "c") {
            checkString = string[i] + string[i + 1] + string[i + 2] + string[i + 3];
            if (testString.indexOf(checkString) >= 0) {
                stringCount += 1;
            }
        }
    }
    return (stringCount);
}
console.log(countCode("cozemaadfehancomedafe"))