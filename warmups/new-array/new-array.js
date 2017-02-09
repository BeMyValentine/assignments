//function
//empty array for unique numbers to go
//for loop that goes through each index of each array
//if the index of [i] < -1 push the [i] into the unique array
//




Array.prototype.unique = function() {
    var a = this.concat();
    for(var i = 0; i<a.length; i++) {
        for (var j = i+1; j<a.length; j++){
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
}


var array1 = [1,2,3,4,5,6];
var array2 = [1,2,7,8,9];

var array3 = array1.concat(array2).unique();
console.log(array3);


