function noDupes(word) {
    var singles= ""
    var doubles= ""
    for (var i = 0; i < word.length; i++) {
        if(singles.indexOf(word[i]) !==-1) {
            doubles += word[i];
        } else {
            singles += word[i];
            
        }
    }
    console.log ("No duplicates: " + singles)
    console.log ("Extras: " + doubles)
}
noDupes("bookkeeper larry");