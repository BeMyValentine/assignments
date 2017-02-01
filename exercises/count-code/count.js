function countCode(string) {
    var codeCounter = 0;
    for (var = 0; i < string.length; i += 1) {
        if (string[i] === "c" && string[i + 1] === "o" && string[i + 3] === "e") {

            codeCounter += 1;
        }
    }
}


return codeCounter;
}
console.log(countCode("cozemaadfehancomedafe"));

