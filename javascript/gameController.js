
function updateTiles(){
  var board = TicTacConfig.getGameBoard();

  for(var i =0; i< 3; i++){
    for (var j =0; j < 3; j++){

        if(board[i][j] == true){
        $("#c"+i+j).html("x");
}
        else if(board[i][j] == false){
        $("#c"+i+j).html("y");
      }
      else{
        $("#c"+i+j).html("");
      }
    }

  }
};
