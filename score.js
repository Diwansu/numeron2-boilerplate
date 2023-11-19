// Iteration 8: Making scoreboard functional
   var urlparams = new URLSearchParams(window.location.search);
   console.log(urlparams);
   console.log(window.location.search)
   var score = urlparams.get("score");
   
   var scoreBoard = document.getElementById("score-board");
   var playAgainButton = document.getElementById("play-again-button");

   scoreBoard.innerHTML = score;
   playAgainButton.onclick =(evt) => {
    location.href = "./game.html"
   }
