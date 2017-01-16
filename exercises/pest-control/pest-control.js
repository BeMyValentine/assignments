var goomba = 5;
var bob_omb = 7;
var cheep_cheep = 11;

document.getElementById("totalButton").addEventListener('click', function () {
    var amount1 = document.getElementById("amount1").value;
    amount1 = parseInt(amount1);
    var amount2 = document.getElementById("amount2").value;
    amount2 = parseInt(amount2);
    var amount3 = document.getElementById("amount3").value;
    amount3 = parseInt(amount3);
    if (amount1 > 0 || amount2 > 0 || amount3 > 0) {
        document.getElementById("finalPrice").innerHTML =
            "You owe Mario " + ((amount1 * goomba) + (amount2 * bob_omb) + (amount3 * cheep_cheep)) +
            " total coins for exterminating your pests";
    } else {
        document.getElementById("finalPrice").innerHTML = "You don't owe Mario anything!";
    }
});



//document.getElementById(Id).value
//Need an alert, or h3 element to catch the return
//document.getElementbyId("ID") always returns as a "string"