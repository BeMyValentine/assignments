var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];



function addWords(lyrics) {
    var string = "";
    for (var i = 0; i < lyrics.length; i++) {
        string += lyrics[i] + " ";
    }
    console.log(string);
}
addWords(lyrics);


function backWords(lyrics) {
    var string = "";
    for (var i = lyrics.length - 1; i >= 0; i--) {
        string += lyrics[i] + " ";
    }
    console.log(string)
}
backWords(lyrics)

function everyOther(lyrics) {
    var string = "";
    for (var i = 0; i < lyrics.length; i += 2) {
        string += lyrics[i] + " ";
    }
    console.log(string)
}
everyOther(lyrics)

function complex(lyrics) {
    var string = "";
    for (var i = 1; i <= lyrics.length; i += 2) {
        if (i < lyrics.length - 1) {
            string += lyrics[i] + " ";
            string += lyrics[i - 1] + " ";
        } else if (i === lyrics.length)
            string += lyrics[i - 1] + " ";
    }
    console.log(string)
}
complex(lyrics)