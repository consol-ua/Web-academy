const EMPTY_CELL = "";
const X_CELL = "X";
const O_CELL = "O";

const crossGame = {
  moves: ["X"],
  gameProgress: true,
  winnerInGame: null,
  board: new Array(9).fill(EMPTY_CELL)
};

crossGame.bodyBoard = document.querySelector(".body");
crossGame.bodyBoardEl = crossGame.bodyBoard.querySelectorAll(".body__item");

function newGame() {
  const taskNewGame = window.confirm("Игра закончена, начать заново?")
    ? crossGame.clear()
    : window.alert("Игра окончена!");
  return taskNewGame;
}
crossGame.step = function (indexBoard, el) {
  if (!crossGame.gameProgress) {
    newGame();
  }
  if (
    crossGame.board[indexBoard] === X_CELL ||
    crossGame.board[indexBoard] === O_CELL
  ) {
    window.alert("Ячейка занята, сделайте другой ход!");
  } else {
    crossGame.board[indexBoard] = el;
    crossGame.renderItem(indexBoard, el);
  }
  if (crossGame.winner(el)) {
    crossGame.gameProgress = false;
    crossGame.winnerInGame = el;
    window.alert("Победитель" + crossGame.winnerInGame);
    setTimeout(newGame, 2000);
  }
};

crossGame.createX = function () {
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const line1El = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  const line2El = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  svgEl.setAttribute("class", "x body__item-el");
  svgEl.setAttribute("viewBox", "0 0 80 80");

  /* <line class="x__line1" x1="20" y1="10" x2="60" y2="70" /> */
  line1El.setAttribute("class", "x__line1");
  line1El.setAttribute("x1", "20");
  line1El.setAttribute("y1", "10");
  line1El.setAttribute("x2", "60");
  line1El.setAttribute("y2", "70");

  /* <line class="x__line2" x2="20" y2="70" x1="60" y1="10" /> */
  line2El.setAttribute("class", "x__line2");
  line2El.setAttribute("x1", "60");
  line2El.setAttribute("y1", "10");
  line2El.setAttribute("x2", "20");
  line2El.setAttribute("y2", "70");

  svgEl.append(line1El, line2El);

  return svgEl;
};

crossGame.createO = function () {
  const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const ellipse = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse"
  );
  svgEl.append(ellipse);
  svgEl.setAttribute("class", "o body__item-el");
  svgEl.setAttribute("viewBox", "0 0 80 80");

  /*           <svg class="o body__item-el" viewBox="0 0 80 80">
            <ellipse cx="40" cy="40" rx="20" ry="30" /> */
  ellipse.setAttribute("cx", "40");
  ellipse.setAttribute("cy", "40");
  ellipse.setAttribute("rx", "20");
  ellipse.setAttribute("ry", "30");

  return svgEl;
};

crossGame.renderItem = function (indexBoard, el) {
  const render = el === X_CELL ? crossGame.createX() : crossGame.createO();

  crossGame.bodyBoardEl[indexBoard].append(render);
};

crossGame.winner = function (el) {
  const { board } = crossGame;

  for (let i = 0; i < 3; i++) {
    const row = [board[i * 3], board[i * 3 + 1], board[i * 3 + 2]];

    const column = [board[i], board[i + 3], board[i + 6]];

    if (check(row) || check(column)) {
      return true;
    }
  }

  function check(array) {
    return array.every(function (elArray) {
      return elArray === el;
    });
  }
  // console.log(column);

  if (
    check([board[0], board[4], board[8]]) ||
    check([board[2], board[4], board[6]])
  ) {
    return true;
  }
};

crossGame.fillToClick = function () {
  const fill =
    crossGame.moves[crossGame.moves.length - 1] === X_CELL ? O_CELL : X_CELL;

  crossGame.moves.push(fill);
  return fill;
};

crossGame.clear = function () {
  crossGame.bodyBoardEl.forEach((element) => (element.innerHTML = ""));
  crossGame.moves = ["X"];
  crossGame.board = new Array(9).fill(EMPTY_CELL);
  crossGame.gameProgress = true;
  crossGame.winnerInGame = null;
};

console.log(crossGame.bodyBoardEl);
crossGame.bodyBoard.addEventListener("click", function () {
  crossGame.step(+event.target.id, crossGame.fillToClick());
});

// console.log(crossGame.board);
console.log(crossGame);
