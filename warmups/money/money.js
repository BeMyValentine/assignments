//create a function
//do a for loop counting the digits and at the 2nd to last digit insert a decimal (lastIndexOf -=2)
//insert a $ before the first digit (indexOf 0)
//insert a comma after (lastIndexOf -=5) then every 3 characters after that.




function money (input){
    return (input/100).toLocaleString('en-US', {style: 'currency', currency: "USD"})
}

console.log(money(123457890));