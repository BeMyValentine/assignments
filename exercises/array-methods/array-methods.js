var fruit = ['banana', 'apple', 'orange', 'watermelon'];
var vegetables = ['carrot', 'tomato', 'pepper', 'lettuce'];

console.log(fruit);
console.log(vegetables);

vegetables.pop();

fruit.shift();

console.log(fruit);
console.log(vegetables);

fruit.push(fruit.indexOf('orange'));

console.log(vegetables.length);

vegetables.push(vegetables.length);

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4,2);

food.reverse();

console.log(food.toString());