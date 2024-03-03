let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
  // rock , paper , scissors
};

const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `you lost! ${CompChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const gameDraw = () => {
  pmsg.innerText = "game was Draw.";
  msg.style.backgroundColor = "black";
};

const playGame = (userChoice) => {
  const CompChoice = genCompChoice();
  if (userChoice === CompChoice) {
    // game draw
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors , rock

      userWin = CompChoice === "scissors" ? false : true;
    } else {
      // rock , paper
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
