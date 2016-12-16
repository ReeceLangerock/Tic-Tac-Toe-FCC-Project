var TicTacConfig = (function() {
    var userGamePiece = 'X';
    var computerGamePiece = 'O';
    var myTurn = false; //shared variable available only inside your module

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
        }

        getMyTurn: function() {
          return myTurn; // this function can also access my_var
        }

        getGameBoard: function() {
          return gameBoard; // this function can also access my_var
        }






    };

})();
