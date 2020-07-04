//Which player's turn?
var activePlayer = 1;

//collected  points
var scores = [0, 0];

//current points
var roundScore = 0;

//dice side(random  1-6)

//<div class="player-score" id="score-0">43</div>

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;

document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
