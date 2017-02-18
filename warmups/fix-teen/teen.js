function fixTeen(n) { 
    if (n >= 13 && n <= 19) { 
        if (n === 15 || n === 16) { 
            console.log (n);
        } else {
            console.log(0);
        }
    } else {
        console.log(n);
    }
}

fixTeen(14);
fixTeen(15);
fixTeen(20);

