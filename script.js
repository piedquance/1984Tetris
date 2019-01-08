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
const sprites = [[
["","[]",""],
["","[]","[]"],
["","","[]"],
],[
["","","[]"],
["","[]","[]"],
["","[]",""]
],[
["","[]",""],
["","[]","[]"],
["","[]",""]
],[
["","[]",""],
["","[]",""],
["","[]","[]"]
],[
["","[]","[]"],
["","[]",""],
["","[]",""]
],[
["","[]","",""],
["","[]","",""],
["","[]","",""],
["","[]","",""]
],[
["[]","[]"],
["[]","[]"]
]]
// INDEPENDANT FUNCTION UNION
function arrayToString(mapT) {let mapImage = "";for(let row = 0; row < mapT.length; row++) {for(let unit = 0; unit < mapT[row].length; unit++) {mapImage += mapT[row][unit];}mapImage += "<br>";}return mapImage;};

function rotateSquare(array) {
  let copy = [];
  for(let y = 0; y < array.length;y++) {
    copy.push([]);
    for(let x = 0; x < array.length;x++) {
      copy[y][x] = array[array.length-1-x][y];
    }
  }
  return copy;
};
function display(grid, sprite, x, y) {
  let newGrid = [];
  for(let y = 0; y < grid.length;y++) {
    newGrid.push([]);
    for(let x = 0; x < grid[y].length;x++) {
      newGrid[y][x] = grid[y][x];
    }
  }
//  if(newGrid[y][x + farthest(sprite, "x")] && newGrid[y + farthest(sprite, "y")][x]) {
    for(let y1 = 0; y1 < sprite.length;y1++) {
      for(let x1 = 0; x1 < sprite.length;x1++) {
        if(sprite[y1][x1]) {
          newGrid[y+y1][x+x1] = sprite[y1][x1];
        }
     }
   }
   return newGrid;
//  }
//  else return grid;
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function collision(OGgrid, array, x, y, setting) {
  let grid = display(OGgrid, array, x, y);
  let ok = true;
  switch(setting) {
    case "a" :
    for(let y1 = 0; y1 < array.length; y1++) {
      let stop = true;
      let x1 = -1;
      while(stop) {
          x1++;
        if(array[y1][x1] === "[]") stop = false;
      }
      if(grid[y + y1][x - 1 + x1] === "[]" || grid[y + y1][x - 1 + x1] === "&lt!") ok = false;
    }
    break;
    case "d" :
    for(let y1 = 0; y1 < array.length; y1++) {
    let x1 = 1;
    for(let x2 = 0; x2<array[y1].length;x2++) {
      if(array[y1][x2] === "[]" ) x1++;
    }
    if(grid[y + y1][x + x1] === "[]" || grid[y + y1][x +x1] === "!>") ok = false;
  }
    break;
    case "w" :
    let copy = display(OGgrid, rotateSquare(array), x, y);
    let num1 = 0, num2 = 0;
    for(let y1 = y;y1<y+array.length;y1++) {
      for(let x1 = x; x1<x+array.length;x1++) {
        if(copy[y1][x1] !== " .") num2++ ;
        if(grid[y1][x1] !== " .") num1++ ;
      }
    }
    console.log(num2, num1);
    if(num1 !== num2) ok = false;
    break;
    case "s" :
    break;
  }
  return ok;
}
//VARIABLE DECLARATION DEPOSIT
let scr = document.querySelector("#scr");
let grid = document.querySelector("#grid");
let contr = document.querySelector("#contr");
let game = document.querySelector("#game");
let once = true;
let key;
let current;
let x = 5;
let y = 5;

//#####SETUP#####
function setup() {
scr.innerHTML = "FULL LINES = <span id=\"lines\">0</span><br>LEVEL = <span id=\"lvl\">0</span><br>SCORE = <span id=\"score\">0</span><br>TIME = <span id=\"time\">0</span><br><br><span id=\"next\"></span>"
grid.innerHTML = arrayToString(gameGrid);
contr.innerHTML = "ROTATE: w"
current = sprites[getRandomArbitrary(0, 7)]
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
  let gamePlay = [];
  for(let y = 0; y < gameGrid.length;y++) {
    gamePlay.push([]);
    for(let x = 0; x < gameGrid[y].length;x++) {
      gamePlay[y].push(gameGrid[y][x]);
    }
  }
 switch(key) {
   case "a":
   if(collision(gamePlay, current, x, y, "a")) x--;
   gamePlay = display(gamePlay, current, x, y);
    break;
   case "d":
   if(collision(gamePlay, current, x, y, "d")) x++;
   gamePlay = display(gamePlay, current, x, y);
   break;
   case "w" :
   if(collision(gamePlay, current, x, y, "w")) current = rotateSquare(current);
   gamePlay = display(gamePlay, current, x, y);
   break;
/*   case "s" :
   if(y !== 19)y++;
   gamePlay = display(gamePlay, current, x, y);
   break;*/
   default :
   gamePlay = display(gamePlay, current, x, y);
   break;
 }




  next.innerHTML = arrayToString(current);
  grid.innerHTML = arrayToString(gamePlay);
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
