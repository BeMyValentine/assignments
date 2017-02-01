var firstNumber = prompt("Input a number")
var secondNumber = prompt("Input another number")

function lowerNumber() {
    if (firstNumber < secondNumber) {
        console.log(firstNumber)
    } else {
        console.log(secondNumber)
    }
}

var aSmile = true
var bSmile = false
var troubleBrewing = function () {
    if (aSmile === bSmile) {
        console.log("RUN AWAY!!!!")
    } else {
        console.log("STAY AND FIGHT")
    }
}
troubleBrewing()

var greeting = function () {
    var time = new Date();
    var hours = time.getHours
    if (hours < 12) {
        console.log("Good Morning")
    } else if (hours >= 12 && hours < 18) {
        console.log("Good Afternoon")
    } else if (hours >= 18 && hours < 24) {
        console.log("Good Evening")
    } else if (hours >= 24) {
        console.log("I said military time mofo. Where the heck are you from?????")

    } else {
        console.log("I don't understand")
    }
}
greeting()