


function add(number1, number2) {
    return number1 + number2;
};

function sub(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
};

function mul(number1, number2) {
    return number1 * number2;
};

Subtractor.prototype.subtract = function () {
    return this.number1 - this.number2;
};

function divide(number1, number2) {
    if (num2 === 0) {
        return 0;
    }
    return number1 / number2;
};


function exponent(number1, number2) {
    return Math.pow(number1, number2);
};


module.exports = {
    add: add,
    sub: sub, 
    mul: multiply,
    div: divide,
    exp: exponent
    
}