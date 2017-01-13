var car = "Chevy"
for (var i = 0; i < car.length; i++) {
    console.log(car[i])
}
function findLetter(inputString, inputChar){
    for(var i = 0; i <= inputString.length; i++){
        if (inputString[i] === inputChar){
            console.log(inputString.indexOf(inputChar));
            break;
        } else if (i === inputString.length){
            console.log(inputChar + " was not found in ")
        }
    }
}

findLetter("hello", "l")


function findNumber(){
    var numberArray= [2,6,4,76,12,65,87,42,];
    for (var i = 0; i < numberArray.length; i++){
        if(numberArray[i] === 42){
            
        
            console.log(i);
            break;
        }else if (i === numberArray.length)
        
        
    }
    
}
function findLowestNumber (arrayTen){
    var lowest = arrayTen[0];
    for(var i = 1; i < arrayTen.length; i++){
        if (arrayTen[i] < lowest){
            lowest = arrayTen [i];
            
        }
    }
    return lowest;
}

console.log(findLowestNumber([72,82,100,43,12,44,10,75,32]));