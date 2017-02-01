//create a function
//break the function paramater (string) in half
//Use reverse to flip the 2nd half
//compare the two halves
//or
//create a function
//using a for loop starting at beginning
//and a for loop starting at the end
//compare the letters until a false statement takes you out of the loop








function index(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    for (var i = 0; i < string.length; i++);
    for (var j = string.length; j > 0; i--);
    if (i === j) {
        return true;
    } else {
        return false;
    }

};

index("star Rats");


