

let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);

  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";





};

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is High 😲";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is Low 😌";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "It's Correct 😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = "It's Correct 😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "block";
    userNumberUpdate.setAttribute("disabled", true)
  }

const newGameBegin = () =>{
    window.location.reload();
}

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";

  document.getElementById("gameArea").style.display = "block";
};

const easyMode = () => {
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  maxGuess = 5;
  startGame();
};
