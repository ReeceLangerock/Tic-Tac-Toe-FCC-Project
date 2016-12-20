
var TicTacConfig = (function() {
    var userGamePiece = 'X'; // user piece is true
    var computerGamePiece = 'O'; // cpu piece is false
    var myTurn = true; //shared variable available only inside your module

    var gameBoard = [
      ['None', 'None','None'],
      ['None', 'None','None'],
      ['None', 'None','None']
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

        getMyTurn: function() {
          return myTurn; // this function can also access my_var
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

        resetGameBoard: function(){
          gameBoard = [];
          gameBoard = [
            ['None', 'None','None'],
            ['None', 'None','None'],
            ['None', 'None','None']
          ];
        }
};

    })();
