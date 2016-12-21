
var TicTacConfig = (function() {
    var userGamePiece = 'X'; // user piece is true
    var computerGamePiece = 'O'; // cpu piece is false
    var myTurn = true; //shared variable available only inside your module

    var scores = {
      wins:0,
    losses:0,
  ties:0};

    var gameBoard = [
      [null, null,null],
      [null, null,null],
      [null, null,null]
    ];

    function bar() { // this function not available outside your module
        alert(my_var); // this function can access my_var
    }

    return {
        getUserGamePiece: function() {
          console.log(userGamePiece);
            return userGamePiece; // this function can access my_var
        },
        getComputerGamePiece: function() {
          return cpuGamePiece; // this function can also access my_var
        },

        addLoss: function(){
          scores.losses = scores.losses + 1;
        },

        addWin: function(){
          scores.wins = scores.wins+1;
        },

        addTie: function(){
          scores.ties = scores.ties+1;
        },

        getScores: function(){
          return scores;
        },

        getMyTurn: function() {
          return myTurn; // this function can also access my_var
        },

        updateTurn: function() {
          myTurn = true;
        },

        getGameBoard: function() {
          return gameBoard; // this function can also access my_var
        },

        switchTurn: function(){
          if(myTurn){
            myTurn = false;}
          else {
            myTurn = true;
          }

        },

        updateGameBoard: function(row,col,value){
          gameBoard[row][col] = value;
          return true;
        },

        replaceGameBoard: function(board){
          gameBoard = board;
        },

        resetGameBoard: function(){
          gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
        }
};

    })();
