function checkWinner(){
  var board = TicTacConfig.getGameBoard();
  var tileOptions = [true,false]
  var allNotNull = true;

  for(var i =0; i < winOptions.length;i++){
    var tileFilled = tileOptions[i];

    var diagonalComplete1 = true;
    var diagonalComplete2 = true;

    // loop through the board to check if either diagonal is filled
    for(var x = 0; x < 3; x++){
      if(board[x][x] != tileFilled){
        diagonalComplete1 = false;
      }
      if(board[2-x][x] != tileFilled){
        diagonalComplete2 = false;
      }

      var rowComplete = true;
      var colComplete = true;
      // loop through the board to check if a row or column is complete

      for(var y = 0; y < 3; y++){
        if(board[x][y] != tileFilled){
          colComplete = false;
        }

        if(board[y][x] != tileFilled){
          rowComplete = false;
        }

      }

      if(rowComplete || colComplete){
        if(tileFilled){
        return 1;
      }
        else {
          return 0;
        }


    }

    if(diagonalComplete1 || diagonalComplete2){
      if(tileFilled){
      return 1;
    }
      else {
        return 0;
      }
    }
  }
    if(allNotNull){
      return -1;
    }
    return null;

  }
}
