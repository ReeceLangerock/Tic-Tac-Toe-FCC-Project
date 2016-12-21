$(document).ready(function() {

  var myVar = [];

      function delayFunction() {
          for(i=0;i<10;i++){
              myVar.push(
                  setTimeout(function(){
                      alert("Hello")
                  }, 3000)
              );
          }
      }

      function myStopFunction() {
          myVar.forEach(function(timer) {
              clearTimeout(timer);
          });
      }



    $("td").click(function() {

        var board = TicTacConfig.getGameBoard();
        var cell = $(this).attr("id");
        var row = parseInt(cell[1]);
        var col = parseInt(cell[2]);

        if (TicTacConfig.getMyTurn() && board[row][col]===null) { // if player turn is true
            TicTacConfig.updateGameBoard(row, col, false); // saves the user selection in the config object
            TicTacConfig.switchTurn(); // switches move to CPU
            updateTiles(); // update html to show user move
            makeCPUMove(); // CPU makes their move
        }
    });
});

function makeCPUMove() {

    var board = TicTacConfig.getGameBoard();
    board = minimaxMove(board);
    TicTacConfig.replaceGameBoard(board);
    TicTacConfig.switchTurn();
    updateMove();


};

function minimaxMove(board) {
    numNodes = 0;
    return recurseMinimax(board, true)[1];
}

function recurseMinimax(board, player) {
    var winner = checkWinner();


    if (winner != null) {
        switch (winner) {
            case 1:
                return [1, board];
            case 0:
                return [-1, board];
            case -1:
                return [0, board];
        }
    } else {

        var nextVal = null;
        var nextBoard = null;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                    board[i][j] = player;
                    var value = recurseMinimax(board, !player)[0];
                    if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
                        nextBoard = board.map(function(arr) {
                            return arr.slice();
                        });
                        nextVal = value;
                    }
                    board[i][j] = null;
                }
            }
        }


        return [nextVal, nextBoard];
    }
};

function updateMove() {
    updateTiles();
    var myMove = TicTacConfig.getMyTurn();
    var winner = checkWinner();
    $("#result").html(winner == 1 ? "AI Won!" : winner == 0 ? "You Won!" : winner == -1 ? "Tie!" : "");
    if(winner === 1){
      TicTacConfig.addLoss();
    }
    else if(winner === 0){
      TicTacConfig.addWin();
    }
    else if (winner === -1){
      TicTacConfig.addTie();
    }
    //$("#turn").html(myMove ? "AI's Move" : "Your move");
};


function updateTiles() {
    var board = TicTacConfig.getGameBoard();

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

            if (board[i][j] === true) {
                $("#c" + i + j).html("O");
            } else if (board[i][j] === false) {
                $("#c" + i + j).html("X");
            } else {
                $("#c" + i + j).html("");
            }
        }

    }
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
                if (board[i][j] == null) {
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
