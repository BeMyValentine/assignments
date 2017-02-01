function fixTeen(n) { 
    if (n >= 13 && n <= 19) { 
        if (n === 15 || n === 16) { 
            return n;
        } else {
            return 0;
        }
    } else { 
        return n; 
    }
}

function noTeenSum(a, b, c) { 
    var num = 0; 
    num += fixTeen(a);
    num += fixTeen(b);
    num += fixTeen(c);
    console.log(num);
}
