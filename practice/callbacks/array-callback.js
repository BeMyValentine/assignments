var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens = nums.filter(function(item) {
if (item % 2 === 0) {
    return true;
}
})
console.log(evens);