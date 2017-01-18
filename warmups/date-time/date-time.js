function getDay(){
    var today = new Date();
    var day = today.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wedsneday", "Thursday", "Friday", "Saturday"];
    console.log("Today is: " + days[day]);
    var time = today.toLocaleTimeString();
    console.log("The Time is: " + time);
}
getDay();