/**
 * Satik 2022
 * X&O
 * 21.04.2022
 * */
const button = document.getElementById("button");
let turn;
let arr = [];
let control = 0;
button.addEventListener("click", create);

// dynamic create table
function create() {
  const n = +document.getElementById("inp").value;
  window.n = n;
  const check = document.getElementById("check").checked;
  document.getElementById("start").style.display = "none";
  const table = document.createElement("table");
  table.style.width = `${n * 110}px`;
  table.id = "table";
  document.body.prepend(table);
  for (let i = 0; i < n; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < n; j++) {
      const td = document.createElement("td");
      td.id = `td${i}${j}`;
      arr.push(`td${i}${j}`);
      control++;
      tr.append(td);
    }
    table.append(tr);
  }

  // td add click function
  arrTd = document.querySelectorAll("td");
  for (element of arrTd) {
    element.addEventListener("click", gameX);
  }
  startComp();
}
// the game starts the computer
function startComp() {
  let chek = document.getElementById("check").checked;
  if (chek) {
    turn = false;
    randomO();
  } else {
    turn = true;
  }
}
function gameX() {
  if (turn) {
    if (this.innerHTML !== "O" && this.innerHTML !== "X") {
      this.innerHTML = "X";
      control--;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === this.id) {
          arr[i] = "X";
        }
      }
      turn = false;
      finish();
      if (control > 0) {
        randomO();
      }
    }
  }
}
function randomO() {
  let i = Math.floor(Math.random() * +window.n);
  let j = Math.floor(Math.random() * +window.n);
  const id = `td${i}${j}`;
  const elem = document.getElementById(id);
  if (elem.innerHTML !== "O" && elem.innerHTML !== "X") {
    setTimeout(function () {
      elem.innerHTML = "O";
      control--;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem.id) {
          arr[i] = "O";
        }
      }
      finish();
      turn = true;
    }, 500);
  } else {
    randomO();
  }
}
function finish() {
  //row
  let rowX = 0;
  let rowO = 0;
  for (let i = 0; i < arr.length; ) {
    for (let j = i; j < i + n; j++) {
      if (arr[j] === "X") {
        rowX++;
      } else if (arr[j] === "O") {
        rowO++;
      }
    }
    if (rowX === n) {
      control = 0;
      setTimeout(function () {
        alert("Victory!");
        +location.reload();
      }, 400);
      break;
    } else {
      rowX = 0;
    }
    if (rowO === n) {
      control = 0;
      setTimeout(function () {
        alert("Defeat");
        +location.reload();
      }, 400);
      break;
    } else {
      rowO = 0;
    }
    i = i + n;
  }
  //column
  let columnX = 0;
  let columnO = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < arr.length; ) {
      if (arr[j] === "X") {
        columnX++;
      } else if (arr[j] === "O") {
        columnO++;
      }
      j = j + n;
    }
    if (columnX === n) {
      control = 0;
      setTimeout(function () {
        alert("Victory!");
        +location.reload();
      }, 400);
      break;
    } else {
      columnX = 0;
    }
    if (columnO === n) {
      control = 0;
      setTimeout(function () {
        alert("Defeat");
        +location.reload();
      }, 400);
      break;
    } else {
      columnO = 0;
    }
  }
  //diagonal-1
  let diagonal1X = 0;
  let diagonal1O = 0;
  for (let i = 0; i < arr.length; ) {
    if (arr[i] === "X") {
      diagonal1X++;
    } else if (arr[i] === "O") {
      diagonal1O++;
    }
    i = i + n + 1;
  }
  if (diagonal1X === n) {
    control = 0;
    setTimeout(function () {
      alert("Victory!");
      +location.reload();
    }, 400);
  } else {
    diagonal1X = 0;
  }
  if (diagonal1O === n) {
    control = 0;
    setTimeout(function () {
      alert("Defeat");
      +location.reload();
    }, 400);
  } else {
    diagonal1O = 0;
  }
  //diagonal-2
  let diagonal2X = 0;
  let diagonal2O = 0;
  for (let i = n - 1; i < arr.length - 1; ) {
    if (arr[i] === "X") {
      diagonal2X++;
    } else if (arr[i] === "O") {
      diagonal2O++;
    }
    console.log(i);
    i = i + n - 1;
  }
  if (diagonal2X === n) {
    control = 0;
    setTimeout(function () {
      alert("Victory!");
      +location.reload();
    }, 400);
  } else {
    diagonal2X = 0;
  }
  if (diagonal2O === n) {
    control = 0;
    setTimeout(function () {
      alert("Defeat");
      +location.reload();
    }, 400);
  } else {
    diagonal2O = 0;
  }
}
