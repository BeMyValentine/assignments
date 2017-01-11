//Simple/primitive JavaScript data types//
var another name = "Dan"; //String

var age = 10; // Number

var isAdmin = true; // Boolean

//Other simple data types in JavaScript include:
undefined;
null;
NaN;


//Complex data types

//Arrays
var students = ["Morgan", "Dan", "Gabe"];
var ages = [3, 4, 5];
var admins = [true, true, false];

//Objects
var person = {
    firstName: "Dan",
    lastName: "Pak",
    age: 23,
    isJapanese: false
};

var phone = {
    color: "Black",
    brand: "Apple",
    version: "iPhone 7",
    memCapacity: "128GB",
    isJailBroken: false,
    case: {
        color: "Black",
        brand: "Spigen"
    }
}

console.log(phone.brand); // "Apple"
console.log(phone.case.brand); //"Spigen"