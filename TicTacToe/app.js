let buttons = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");

let turnX = true; // player x turn
let count = 0;

let msg = document.querySelector("#msg");
let msgbox = document.querySelector(".msg-box");
let reset = document.querySelector("#reset-btn");

let showWinner = (winner) => {
  msg.textContent = `Congratulations! Winner is Player ${winner}`;
    msgbox.classList.remove("hide");
    msgbox.classList.add("show"); //adding animation class
  reset.textContent = "New Game";
};

const gameDraw = () => {
  msg.textContent = "Its a Draw!";
  msgbox.classList.remove("hide");
  reset.textContent = "Play again";
};

const resetGame = () => {
    turnX = true;
    count = 0;
  enableBtns();
  msgbox.classList.add("hide");
  reset.textContent = "Reset Game";
};

reset.addEventListener("click", resetGame);

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    if (turnX) {
      btn.textContent = "X";
      turnX = false;
    } else {
      btn.textContent = "O";
      turnX = true;
    }
      btn.disabled = true;
    
    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

let checkWinner = () => {
  winPatterns.forEach((pattern) => {
    let pos1val = buttons[pattern[0]].textContent;
    let pos2val = buttons[pattern[1]].textContent;
    let pos3val = buttons[pattern[2]].textContent;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        disableBtns();
        showWinner(pos1val);
      }
    }
  });
};

const disableBtns = () => {
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

const enableBtns = () => {
  buttons.forEach((btn) => {
    btn.disabled = false;
    btn.textContent = "";
  });
};

