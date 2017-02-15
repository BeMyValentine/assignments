var Locate = require("./locate")

var board = [];

function newBoard() {
    

    for (var i = 0; i < 10; i++) {
        var row = [];
        for (var j = 0; j < 10; j++) {
            row.push(new Locate());
        }
      board.push(row);
    }
    return board;
}
newBoard();

function printBoard() {
    
    var display = "";
        for (var i = 0; i < 10; i++) {
        var row = "";
        for (var j = 0; j < 10; j++) {
            row += (board[i][j].display + " ");
        }
      display += row + "\n";
    }
  console.log(display);
}


printBoard();

