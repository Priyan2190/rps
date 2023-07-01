// const  rockbtn = document.getElementById("Rock");
// const  paperbtn = document.getElementById("Paper");
// const  scisbtn = document.getElementById("Scissors");
// const endingbtn = document.getElementById("reset-end")

// rockbtn.onclick =()=>console.log("rock");
// paperbtn.onclick =()=>console.log("paper");
// rockbtn.onclick =()=>console.log("rock");
// scisbtn.onclick =()=>console.log("scissor");
// endingbtn.onclick =()=>console.log("end game");

const totalScores = { playerScore: 0 };

  const btns = document.querySelectorAll(".rpsbutton");
  btns.forEach((button) => {
    button.onclick = () => onclickRPS(button.value);
  });


const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const mathRandom = Math.floor(Math.random() * 3);
  return choices[mathRandom];
};

const getResult = (playerChoice, compChoice) => {
  let score = [];

  if (playerChoice == compChoice) {
    score = 0;
  } else if (playerChoice == "Paper" && compChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && compChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Rock" && compChoice == "Scissors") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

const onclickRPS = (playerChoice) => {
  console.log({ playerChoice });
  const compChoice = getComputerChoice();
  console.log({ compChoice });
  const score = getResult(playerChoice, compChoice);
  totalScores["playerScore"] += score;

  console.log({ score });
  console.log(totalScores);

  showResult(score, playerChoice, compChoice);

};
const showResult = (score, playerChoice, compChoice) => {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const palyerScoreDiv = document.getElementById("score");
  if (score == -1) {
    resultDiv.innerText = "You Lose!!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!!";
  } else {
    score == 1;
    resultDiv.innerText = "You Won!!";
  }

  handsDiv.innerText = `👨${playerChoice} VS. 🤖 ${compChoice}`;
  palyerScoreDiv.innerText = totalScores['playerScore'];
};


const endDiv = document.getElementById("reset-end");
endDiv.onclick = ()=>endReset(totalScores);

const endReset = () => {
  totalScores["playerScore"] = 0;
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const palyerScoreDiv = document.getElementById("score");
  resultDiv.innerText = "";
  handsDiv.innerText = "";
  palyerScoreDiv.innerText = "";
};
