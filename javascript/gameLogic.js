$(document).ready(function() {

$("td").click(function() {

       var board = TicTacConfig.getGameBoard();
       var cell = $(this).attr("id");
       var row = parseInt(cell[1]);
       var col = parseInt(cell[2]);

       if (TicTacConfig.getMyTurn()) { // if player turn is true
           TicTacConfig.updateGameBoard(row,col,true); // saves the user selection in the config object
           TicTacConfig.switchTurn(); // switches move to CPU
           updateTiles(); // update html to show user move

           makeCPUMove(); // CPU makes their move
       }
   });
 });

function makeCPUMove(){
    var row =Math.floor(Math.random() *3);
    var col =Math.floor(Math.random() *3);
    $("#tester").html(checkWinner());
    TicTacConfig.switchTurn();
};

function checkWinner() {

    var board = TicTacConfig.getGameBoard();
    vals = [true, false];
    var allNotNull = true;
    for (var k = 0; k < vals.length; k++) {
        var value = vals[k];

        // Check rows, columns, and diagonals
        var diagonalComplete1 = true;
        var diagonalComplete2 = true;
        for (var i = 0; i < 3; i++) {
            if (board[i][i] != value) {
                diagonalComplete1 = false;
            }
            if (board[2 - i][i] != value) {
                diagonalComplete2 = false;
            }
            var rowComplete = true;
            var colComplete = true;
            for (var j = 0; j < 3; j++) {
                if (board[i][j] != value) {
                    rowComplete = false;
                }
                if (board[j][i] != value) {
                    colComplete = false;
                }
                if (board[i][j] == "None") {
                    allNotNull = false;
                }
            }
            if (rowComplete || colComplete) {
                return value ? 1 : 0;
            }
        }
        if (diagonalComplete1 || diagonalComplete2) {
            return value ? 1 : 0;
        }
    }
    if (allNotNull) {
        return -1;
    }
    return null;
};
