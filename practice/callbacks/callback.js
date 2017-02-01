function doSomething(callback) {
    console.log("I'm about to do what you told me to do");
    callback();
    console.log("I just did that thing");
}

function runMe() {
    console.log("I'm running the function right now! Weeee!");

}

doSomething(runMe);
doSomething(function () {
    console.log("I'm the second example");
});

function getInfo(callback) {
    //Get some info from the database
    //When stuff finishes coming back:
    var data = "info" //example of getting data
    callback();
}

getInfo(function (data) {
    console.log("Yay info is here! here you go: " + data);

})