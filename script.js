const resetbtn = document.querySelector(".bubbles");
const container = document.querySelector(".grid-container");
const pwan1 = document.querySelector(".pawn1foot");
const pwan2 = document.querySelector(".pawn2foot");
const nameElem = document.querySelector(".name");
pwan2.classList.add("remove");
let turn = true;

let board = Array(9).fill(null);
// console.log(board);
let gameOver = false;

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

function showalert(alertText) {
  const info = document.querySelector(".info");
  info.innerHTML = "";
  const h3 = document.createElement("h3");
  h3.textContent = alertText;
  info.append(h3);
}
// check-if-box-is-empty
function check(Id) {
  const box = document.getElementById(Id);
  //   console.log(box.children.length);
  if (box.children.length) {
    return false;
  } else {
    return true;
  }
}

function checkWin(player) {
  return winPatterns.some((pattern) =>
    pattern.every((index) => board[index] === player)
  );
}

function checkTie() {
  return board.every((cell) => cell !== null);
}

// add pwan1
function addpwan1(getId) {
  const box = document.getElementById(getId);
  const span = document.createElement("span");
  span.className = "material-symbols-outlined pwan1";
  span.textContent = "chess_king";
  if (check(getId)) {
    box.append(span);
  } else {
  }
}

// add pwan2
function addpwan2(getId) {
  const box = document.getElementById(getId);
  const span = document.createElement("span");
  span.className = "material-symbols-outlined pwan2";
  span.textContent = "chess_king_2";
  if (check(getId)) {
    box.append(span);
  } else {
  }
}

// checkwhose turn
function checkTurn(checkid) {
  if (gameOver) return;

  const index = Number(checkid);
  if (board[index] !== null) return;

  if (turn) {
    addpwan1(checkid);
    board[index] = "P1";
    if (checkWin("P1")) {
      showalert("Player 1 wins 🎉");
      gameOver = true;
      return;
    }
    pwan2.classList.remove("remove");
    pwan1.classList.add("remove");
    turn = false;
  } else {
    addpwan2(checkid);
    board[index] = "P2";
    if (checkWin("P2")) {
      showalert("Player 2 wins 🎉");
      gameOver = true;
      return;
    }
    pwan2.classList.add("remove");
    pwan1.classList.remove("remove");
    turn = true;
  }
  if (checkTie()) {
    showalert("It's a tie 🤝");
    gameOver = true;
  }
}
container.addEventListener("click", (e) => {
  const box = e.target.closest(".boxes");
  if (!box) return;

  checkTurn(box.id);
});

resetbtn.addEventListener("click", () => {
  board.fill(null);
  gameOver = false;
  turn = true;

  document.querySelectorAll(".boxes").forEach((box) => {
    box.innerHTML = "";
  });
  //   const info = document.querySelector(".info");
  //   info.innerHTML = `<h3>Player</h3>
  //                     <span class="material-symbols-outlined pawn1foot">
  //                         chess_king
  //                     </span>
  //                     <span class="material-symbols-outlined pawn2foot">
  //                         chess_king_2
  //                     </span>
  //                     <h3>'s Turn</h3>`;
  pwan2.classList.add("remove");
  pwan1.classList.remove("remove");
});
const logout = document.querySelector(".Btn").addEventListener("click", () => {
  window.location.href = "logout.php";
});

// if (nameElem) {
//   nameElem.textContent = `Welcome, ${full_name}`.trim();
// }


if (nameElem) {
  nameElem.textContent = `Welcome, ${firstName} ${lastName}`.trim();
  nameElem.style.fontSize = "30px";
  nameElem.style.color = "green";
}