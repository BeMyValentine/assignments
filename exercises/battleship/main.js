var readline = require("readline-sync");


function getCoords() {
    while (x < 0 || x > 0 || y < 0 || y > 9) {
        var x = readline.keyIn("Choose a coordinate 0-9: ");
        var y = readline.keyIn("Choose a coordinate 0-9: ");
    }
    checkBoard(x, y);
}

function updateBoard(x, y) {
    board[x][y].isHit = true;
    if(board[x][y].isShip = true;) {
        board [x][y].display = "X";
        sunkCount++;
    }else {
        board [x][y].display = "M"
    }
    printBoard(board);
    }

}

function playBattleship() {



    console.log("Welcome General, it is time to kick some alien butt");

    printBoard();

    var coordinates = readline.question("(X, Y) coordinates?");


    if (coordinates >= 10) {
        console.log("invalid input")
    } else {

    }

    if (isShip = true) {
        console.log("YOU SUNK MY BATTLESHIP")
    } else {
        console.log("YOU CAN'T AIM")
    };
}