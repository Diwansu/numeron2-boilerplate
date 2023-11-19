// Iteration 1: Making the play button in the index.html functional.

 const playbutton = document.getElementById("play-button")
 playbutton.onclick = next
 function next (){
    location.href = './game.html'
 }
 
// Description: When the play button is clicked the game.html page should be opened
