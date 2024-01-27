let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#mess");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const genChoice = Math.floor(Math.random() * 3);
  return options[genChoice];
};

const draw = (userChoice, compChoice) => {
  mess.innerText = `Game is draw ${userChoice} is equals ${compChoice}`;
  mess.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    mess.innerText = `You Win! You ${userChoice} beats ${compChoice}`;
    mess.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    mess.innerText = `You lose ${compChoice} beats your ${userChoice}`;
    mess.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genComChoice();

  if (userChoice === compChoice) {
    draw(userChoice, compChoice);
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
