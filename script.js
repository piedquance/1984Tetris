//"sprites"
let gameGrid = [["","","","","","","","","","",""],
["","","","","","","","","","",""],
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
  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"],
  ["&lt!","==","==","==","==","==","==","==","==","==","==","!>",],
["\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/"]];
let cleanLine =   ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"]
let fullLine1 =   ["&lt!","[]","[]","[]","[]","[]","[]","[]","[]","[]", "[]","!>"]
const sprites = [[
["","[]","[]"],
["[]","[]",""],
["","",""],
],[
["[]","[]",""],
["","[]","[]"],
["","",""]
],[
["","[]",""],
["[]","[]","[]"],
["","",""]
],[
["","","[]"],
["[]","[]","[]"],
["","",""]
],[
["[]","",""],
["[]","[]","[]"],
["","",""]
],[
["","","",""],
["[]","[]","[]","[]"],
["","","",""],
["","","",""]
],[
["[]","[]"],
["[]","[]"]
]]
// INDEPENDANT FUNCTION UNION
function arrayToGrid(mapT) {let mapImage = "";for(let row = 2; row < mapT.length; row++) {for(let unit = 0; unit < mapT[row].length; unit++) {mapImage += mapT[row][unit] == "" ? "&nbsp&nbsp":mapT[row][unit];}mapImage += "<br>";}return mapImage;};

function arrayToString(mapT) {let mapImage = "";for(let row = 0; row < mapT.length; row++) {for(let unit = 0; unit < mapT[row].length; unit++) {mapImage += mapT[row][unit] === "" ? "&nbsp&nbsp":mapT[row][unit];}mapImage += "<br>";}return mapImage;};

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
    for(let y1 = 0; y1 < sprite.length;y1++) {
      for(let x1 = 0; x1 < sprite.length;x1++) {
        if(sprite[y1][x1]) {
          newGrid[y+y1][x+x1] = sprite[y1][x1];
        }
     }
   }
   return newGrid;
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
        if(x1+1 === array[y1].length) {
          stop = false;
          x1 = NaN;
        }
      }
      if(grid[y + y1][x - 1 + x1] === "[]" || grid[y + y1][x - 1 + x1] === "&lt!") ok = false;
    }
    break;
	
    case "d" :
    for(let y1 = 0; y1 < array.length; y1++) {
    let x1 = 0;
    for(let x2 = 0; x2<array[y1].length;x2++) {
      if(array[y1][x2] === "[]" ) x1 = x2+1;
    }
    if(grid[y + y1][x + x1] === "[]" || grid[y + y1][x +x1] === "!>")ok = false;
    console.log(y,x,"d",y1,x1,grid[y + y1][x + x1], ok);
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
    if(num1 !== num2) ok = false;
    break;
	
	case "s" :

  for(let x2 = 0; x2<array[0].length;x2++) {
	for(let y1 = array.length-1; y1 >= 0; y1--) {
			if(array[y1][x2] === "[]") {
        if(OGgrid[y + y1 + 1][x + x2] === "[]" || OGgrid[y + y1 + 1][x + x2] === "==") {
          ok = false;
          break;w
        } x2++ }
		} 
  }
 break; 
}
  return ok;
}
//from https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function checkLine(OGgrid) {
  let newGrid = [];

  for(let y = 0; y < OGgrid.length;y++) {
    newGrid.push([]);
    for(let x = 0; x < OGgrid[y].length;x++) {
      newGrid[y][x] = OGgrid[y][x];}}

  let isFull = false;
  for(let y = 2; y < OGgrid.length-2; y++ ) {
    console.log(OGgrid[y])
    console.log(arraysEqual(OGgrid[y], fullLine1))
      if(arraysEqual(OGgrid[y], fullLine1)) {
        newGrid.splice(y, 1);
       newGrid.splice(2, 0,  ["&lt!"," ."," ."," ."," ."," ."," ."," ."," ."," .", " .","!>"]);
      fullLines++;
      lineCount++;
      } 
    }

  return newGrid;
}

//VARIABLE DECLARATION DEPOSIT

let scr = document.querySelector("#scr");
let grid = document.querySelector("#grid");
let contr = document.querySelector("#contr");
let game = document.querySelector("#game");
let gameOn = false;
let key;
let current = [];
let x = 5;
let y = 0;
let tempY = 0;
let gravCounter = 0;
let stillCounter = 0;
let topCounter = 0;
let drop = false;
let fullLines = -1;
let level = 0;
let score = 0;
let time = 0;
let lineCount = 0;
//#####SETUP#####

function start() {
    gameOn = true;

scr.innerHTML = "FULL LINES = <span id=\"lines\">" + fullLines
+ "</span><br>LEVEL = <span id=\"lvl\">" + level
+"</span><br>SCORE = <span id=\"score\">" + score
+"</span><br>TIME = <span id=\"time\">0</span><br><br><span id=\"next\"></span>"
grid.innerHTML = arrayToString(gameGrid);
contr.innerHTML = "ROTATE: w<br>MOVE LEFT: a<br>MOVE RIGHT: d"
current.push(sprites[getRandomArbitrary(0, 7)]);
current.push(sprites[getRandomArbitrary(0, 7)]);
let time = document.querySelector("#time");
let lvl = document.querySelector("#lvl");
let next = document.querySelector("#next");

  frames.push(gameGrid);
  frames[1] = [];
    var game = window.setInterval(() => {draw();}, 1);
}

//#####DRAW#####

function draw() {

  for(let y = 0; y < frames[0].length;y++) {
    frames[1].push([]);
    for(let x = 0; x < frames[0][y].length;x++) {
      frames[1][y].push(frames[0][y][x]);
    }
  }

  tempY = y;

  gravCounter = gravCounter < 81 ? gravCounter + 1 : 0;
  y = gravCounter === 80 ? collision(frames[0], current[0], x, y, "s") ? y + 1 : y : y;
  
  for(letter in inputStream) {
    console.log("this is x    " + inputStream[letter]);
    switch(inputStream[letter]) {
      case "a":
      if(collision(frames[0], current[0], x, y, "a")) x--;
      break;
      case "d":
      if(collision(frames[0], current[0], x, y, "d")) x++;
      break;
      case "w" :
      if(collision(frames[0], current[0], x, y, "w")) current[0] = rotateSquare(current[0]);
      break;
      case "s" :
      while(collision(frames[0], current[0], x, y, "s")) y++;
      drop = true;
      break;
      default :
      break;
    }
  }
  level = Math.trunc(fullLines/10) + 1;
stillCounter = (tempY === y) ? stillCounter+1 : 0;
if(stillCounter > 90 || drop) {

  frames[0] = display(frames[0], current[0], x, y);
  frames[0] = checkLine(frames[0]);

  score +=  lineCount === 1 ? 40 * (level + 1) : 
            lineCount === 2 ? 100 * (level + 1) : 
            lineCount === 3 ? 300 * (level + 1) : 
            lineCount === 4 ? 1200 * (level + 1) : 0;
  lineCount = 0;
 x = 5;
 y = 0;
 current.unshift(current.pop());
current[1] = sprites[getRandomArbitrary(0, 7)];
stillCounter = 0;
drop  = false;
}

time += 0.005;
  scr.innerHTML = "FULL LINES = <span id=\"lines\">" + (fullLines === -1 ? 0 : fullLines)
    + "</span><br>LEVEL = <span id=\"lvl\">" + level
    +"</span><br>SCORE = <span id=\"score\">" + score
    +"</span><br>TIME = <span id=\"time\">" + Math.trunc(time) + "</span><br><br><span id=\"next\">" + arrayToString(current[1]) +"</span>"


topCounter = (y === 0) ? topCounter+1 : 0;
if(topCounter > (90 - level*4 < 0 ? 10 : 90 - level*4)) {

grid.innerHTML = "[]&nbsp&nbsp&nbsp&nbsp<br>GAME OVER<br>&nbsp&nbsp&nbsp&nbsp[]<br><br><br><br><br><span id=\"press\">Press space to replay</span></div>";
frames = [];
 current = [];
 x = 5;
 y = 0;
 tempY = 0;
 gravCounter = 0;
 stillCounter = 0;
 topCounter = 0;
 drop = false;
 time = 0;
 document.addEventListener('keydown', (event) => {
 if(event.key === " ") window.location.reload();
});
}

 inputStream = [];

  console.log("draw")


  grid.innerHTML = arrayToGrid(display(frames[0], current[0], x, y));
  frames[1] = [];

}

//the thing that makes everything work

let inputStream = [];
let frames = [];

document.addEventListener('keydown', (event) => {
  key = event.key;
  inputStream.push(key);
console.log(inputStream);

  if(key === " " && !gameOn) {
    start();
  }

});
