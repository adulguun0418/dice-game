//Which player's turn?
var activePlayer = 0;

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

//roll dice event listener

document.querySelector(".btn-roll").addEventListener("click", function () {
  //1-6 random number var
  var diceNumber = Math.floor(Math.random() * 6 + 1);

  //display dice picture
  diceDom.style.display = "block";

  //dice picture with random number var
  diceDom.src = "dice-" + diceNumber + ".png";

  //if display number is not 1 change current point
  if (diceNumber !== 1) {
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});

//hold button event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  //add current point to collected points
  scores[activePlayer] += roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  //if someone won
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");

    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //current point 0
    //change turn
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}
