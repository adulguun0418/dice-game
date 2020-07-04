//Which player's turn?
var activePlayer = 1;

//collected  points
var scores = [0, 0];

//current points
var roundScore = 0;

//dice side(random  1-6)
var dice = Math.floor(Math.random() * 6 + 1);

//<div class="player-score" id="score-0">43</div>

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
