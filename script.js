let gameGrid = [["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!",".",".",".",".",".",".",".",".",".",".","!>"],
  ["&lt!","=","=","=","=","=","=","=","=","=","=","!>",],
["\\/\\/\\/\\/\\/\\/\\/"]];
function arrayToString(mapT) {let mapImage = "";for(let row = 0; row < mapT.length; row++) {for(let unit = 0; unit < mapT[row].length; unit++) {mapImage += mapT[row][unit];}mapImage += "<br>";}return mapImage;};
let scr = document.querySelector("#scr");
let grid = document.querySelector("#grid");
let contr = document.querySelector("#contr");
let game = document.querySelector("#game");
function loop() {
scr.innerHTML = "FULL LINES = <span id=\"lines\">0</span><br>LEVEL = <span id=\"lvl\">1</span><br>SCORE = <span id=\"score\">0</span><br>TIME = <span id=\"time\">0</span>"
grid.innerHTML = arrayToString(gameGrid);
contr.innerHTML = "Controls:<br> None"
let timer = 0;
let time = document.querySelector("#time");

  setInterval(() => {

    timer++;
    time.innerHTML = timer;


  },1000);
};









document.addEventListener('keydown', (event) => {
  const key = event.key;
  loop();
});
