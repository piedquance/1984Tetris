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

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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
contr.innerHTML = "ROTATE: ww"
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
  /* case "a":
   if(x !== 0) x--;
   gamePlay = display(gamePlay, current, x, y);
    break;
   case "d":
   if(x !== 8) x++;
   gamePlay = display(gamePlay, current, x, y);
   break;*/
   case "w" :
   current = rotateSquare(current);
   gamePlay = display(gamePlay, current, x, y);
   break;
/*   case "s" :
   if(y !== 17)y++;
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
