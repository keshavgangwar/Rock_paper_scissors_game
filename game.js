let userCount = 0;
let CompCount = 0;
const divs = document.querySelectorAll(".div_img");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector(".userPoints");
const compuPoints = document.querySelector(".compuPoints");

const computerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
const drawgame = () => {
  msg.innerText = "Game has been drawn. Play Again..!";
  msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userClick, compClick) => {
  if (userWin) {
    userCount++;
    userPoints.innerText = userCount;
    msg.innerText = `You won.! Your ${compClick} beats ${userClick}`;
    msg.style.background = "rgb(54,207,54";
  } else {
    CompCount++;
    compuPoints.innerText = CompCount;
    msg.innerText = `Computer Win.! ${userClick} beats your ${compClick}`;
    msg.style.background = "Red";
  }
};
const compareChoice = (userClick) => {
  //to generate computer choices
  const compClick = computerChoice();
  if (userClick === compClick) {
    drawgame();
  } else {
    let userWin = true;
    if (userClick === "rock") {
      userWin = compClick === "paper" ? false : true;
    } else if (userClick === "paper") {
      userWin = compClick === "scissors" ? false : true;
    } else {
      userWin = compClick === "rock" ? false : true;
    }
    showWinner(userWin, compClick, userClick);
  }
};

// For user choices
divs.forEach((div_img) => {
  div_img.addEventListener("click", () => {
    const userClick = div_img.getAttribute("id");
    compareChoice(userClick);
  });
});
