$(document).ready(function() {

            $("#newButton").click(function() {

                TicTacConfig.resetGameBoard();
                $("td").html("");
                $("#result").html("");
                //  TicTacConfig.updateMove();


            });


            $("#helpButton").click(function() {
                    alert("Welcome to Generic Tic-Tac-Toe! The AI should make perfect decisions, so it should be impossible to win. Your goal is to tie as much as possible. User game piece is the 'X' and CPU game piece is the 'O'. \nScores button will display the number of wins (0), ties and losses. Reset clears the game board at any time.");

                    });

                $("#scoresButton").click(function() {
                    var scores = TicTacConfig.getScores();
                    alert("Wins:      " + scores.wins + "\nTies:       " + scores.ties + "\nLosses:   " + scores.losses);

                });



            });
