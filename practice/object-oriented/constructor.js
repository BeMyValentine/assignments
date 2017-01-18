// Object-oriented programming (OOP)
// Class -> blueprint for objects
// objects -> instances of a class

//capitalized CamelCase with constructor functions

function User(fn, ln, a) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    //you can add methods to constuctor funtions, or objects
    this.photos = [];
    this.speak = function(){
        console.log("My name is " + this.firstName + " " + this.lastName);
    };
    this.addphoto = function(photo) {
        this.photos.push(photo);
    }
}
var gabe = new User("Gabe", "Hare", 26);
var daniel = new User("Daniel", "Pak", 23);

gabe.speak();
daniel.speak();

gabe.addPhoto("New Photo");
//New photo will be an array of acutal photos. Not a string that says "New Photo"
console.log(gabe.photo);

//with associated html doc
var firstname = document.getElementById("first-name").value;
var lastname = document.getElementById("last-name").value;
var age = document.getElementById("age").value;

