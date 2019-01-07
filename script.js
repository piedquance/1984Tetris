//"sprites"
let gameGrid = [["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!","==","==","==","==","==","==","==","==","==","==","!>",],
["\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/"]];
let S = [
["","[]",""],
["","[]","[]"],
["","","[]"],
];
let Z = [
["","","[]"],
["","[]","[]"],
["","[]",""]
];
let T = [
["","[]",""],
["","[]","[]"],
["","[]",""]
];
let L = [
["","[]",""],
["","[]",""],
["","[]","[]"]
];
let J = [
["","[]","[]"],
["","[]",""],
["","[]",""]
];
let I = [
["","[]","",""],
["","[]","",""],
["","[]","",""],
["","[]","",""]
];
let O = [
["[]","[]"],
["[]","[]"]
];
// INDEPENDANT FUNCTION UNION
function arrayToString(mapT) {let mapImage = "";for(let row = 0; row < mapT.length; row++) {for(let unit = 0; unit < mapT[row].length; unit++) {mapImage += mapT[row][unit];}mapImage += "<br>";}return mapImage;};

function rotateSquare(array) {
  let copy = [];
  for(let y = 0; y < array.length;y++) {
    copy.push([]);
    for(let x = 0; x < array.length;x++) {
      copy[y].push("");
    }
  }
  for(let y = 0; y < array.length;y++) {
    for(let x = 0; x < array.length;x++) {
      copy[y][x] = array[array.length-1-x][y];
    }
  }
  return copy;
};

function farthest(array, direction) {
  let z = 0;
  if(direction === "x")  {
    for(let y = 0; y < array.length;y++) {
      for(let x = 0; x < array.length;x++) {
        z = array[y][x]==="[]" ? x:z;
      }
    } return z;
  } else if(direction === "y"){
    for(let y = 0; y < array.length;y++) {
       z = array[y].includes("[]") ? y:z;
    } return z;
  }

};

function display(grid, sprite, x, y) {
  if(grid[y][x + farthest(sprite, "x")] && grid[y + farthest(sprite, "y")][x]) {
    for(let y1 = 0; y1 < sprite.length;y1++) {
      for(let x1 = 0; x1 < sprite.length;x1++) {
        if(sprite[y1][x1]) {
          grid[y+y1][x+x1] = sprite[y1][x1];
        }
     }
   }
   return grid;
  }
  else return grid;
};

//VARIABLE DECLARATION DEPOSIT
let scr = document.querySelector("#scr");
let grid = document.querySelector("#grid");
let contr = document.querySelector("#contr");
let game = document.querySelector("#game");
let once = true;
let key;
let current;

//#####SETUP#####
function setup() {
scr.innerHTML = "FULL LINES = <span id=\"lines\">0</span><br>LEVEL = <span id=\"lvl\">0</span><br>SCORE = <span id=\"score\">0</span><br>TIME = <span id=\"time\">0</span><br><br><span id=\"next\"></span>"
grid.innerHTML = arrayToString(gameGrid);
contr.innerHTML = "MOVE LEFT: a<br> MOVE RIGHT: d"
let timer = 0;
let difficulty = 1000;
let time = document.querySelector("#time");
let lvl = document.querySelector("#lvl");
let next = document.querySelector("#next");
  setInterval(() => {
    timer++;time.innerHTML = timer+ "s";
  }, difficulty);
};

//#####DRAW#####
function draw() {
  current = S;
  console.log(current);

 gameGrid = display(gameGrid, current, 5, 5);


  next.innerHTML = arrayToString(current);
  grid.innerHTML = arrayToString(gameGrid);
}
//the thing that makes everything work
document.addEventListener('keydown', (event) => {
  key = event.key;
  console.log(key);
  if(key === " " && once) {
    once = false;
    setup();}

  draw();
});
