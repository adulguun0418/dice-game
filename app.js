var activePlayer, scores, roundScore;
var diceDom = document.querySelector(".dice");

var isNewGame;

initGame();
function initGame() {
  isNewGame = true;
  //Which player's turn?
  activePlayer = 0;

  //collected  points
  scores = [0, 0];

  //current points
  roundScore = 0;

  //dice side(random  1-6)

  //<div class="player-score" id="score-0">43</div>

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  //restore players' name
  document.getElementById("name-0").textContent = "Player1";
  document.getElementById("name-1").textContent = "Player2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

//roll dice event listener

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    //1-6 random number var
    var diceNumber = Math.floor(Math.random() * 6 + 1);

    //display dice picture
    diceDom.style.display = "block";

    //dice picture with random number var
    diceDom.src = "dice-" + diceNumber + ".png";

    //if display number is not 1 change current point
    if (diceNumber !== 1) {
      roundScore += diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("click New Game");
  }
});

//hold button event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    //add current point to collected points
    scores[activePlayer] += roundScore;

    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //if someone won
    if (scores[activePlayer] >= 30) {
      isNewGame = false;

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
  } else {
    alert("click New Game");
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

//new game button event listener

document.querySelector(".btn-new").addEventListener("click", initGame);
