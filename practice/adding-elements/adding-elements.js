var button = document.getElementById("add-paragraph");
button.addEventListener("click", function() {
    var phrases = ["Phrase 1", "Phrase 2", "Phrase 3"];
    var rand = Math.floor(Math.random() * 3);
    document.getElementById("new-paragraphs").innerHTML = "<p>" + phrases[rand] + "</p>"
});