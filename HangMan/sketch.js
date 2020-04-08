/*

  Created by: Emile, Arjun, and Abhi

*/
//promts the user for a phrase or dificaalty
var cOrV = prompt('1. Enter your own phrase, 1-26 \n 2. Easy Word \n 3. Moderate Word \n 4. Hard Word \n 5. 612 Inside Joke').trim();

if (cOrV.length >= 1 && cOrV.toUpperCase() != cOrV.toLowerCase() ){
  var askUser = cOrV;
  while (askUser.length > 32 || cOrV.length < 1) {
    askUser = prompt("Error, please try again make sure it is between 1 and 26 characters");
  }
} else {
  var difficulty = cOrV;
}

let dash;
let wds;
let bg;

var isPrompt = false;
var askUser;
var nextPhrase;

function setup() {
  font = loadFont('handlee-regular.ttf')
  textFont(font)
  bg = loadImage('chalkboard-slate-green-blackboard-preview .jpg')
  wds = new Words();
  createCanvas(400, 400);

  if (askUser != null) dash = new Dashes(150, 148, askUser);
  else { 
    dash = new Dashes(150, 148, wds.randomWord(difficulty));
  }
  dash.spaceFix();
  dash.convertor();
}

function draw() {
  background(bg);
  textSize(35);
  dash.displayBlanks();
  dash.displayDificalty(difficulty)
  
  //Draws title
  strokeWeight(3)
  fill(255, 255, 255)
  textSize(40);
  strokeWeight(1)
  text("Hang", 20, 55)
  text("Man!!!", 70, 95)
  strokeWeight(3)

  //Draws the execution board
  push();
  translate(-75, 5);
  rect(125, 250, 150, 1);
  translate(-25, 0);
  rect(200, 100, 1, 150);
  rect(200, 100, 50, 1);
  rect(250, 100, 1, 25);
  pop();

  //Draws incorrect gussses
  textSize(22)
  strokeWeight(1)
  text("Incorrect Guesses", 199, 40)
  strokeWeight(3)
  noFill();
  textSize(35);
  stroke(color(255, 255, 255));
  rect(200, 50, 176, 100);
  rect(200, 150, 38, 36);
  rect(238, 150, 137, 36);
  fill(255, 255, 255)
  strokeWeight(1)
  text("ENTER", 245, 180)
  dash.displayKey();
  strokeWeight(3)

  dash.hangTheMan();
  dash.winCheck();
  
  if (dash.isPlayAgain()) {
    startGame();
   if (nextPhrase != null) dash.reset(nextPhrase);
    else {
    dash.reset(wds.randomWord(difficulty));
  }
    dash.spaceFix();
    dash.convertor();
    dash.setPlayAgain(false);
  }
}

//re-promts the user
function startGame() {
 var cvp = prompt('1. Enter your own phrase, 1-26 \n 2. Easy Word \n 3. Moderate Word \n 4. Hard Word \n 5. 612 Inside Joke').trim();
  if (cvp.length > 1  || cvp.toUpperCase() != cvp.toLowerCase()) {
    nextPhrase = cvp;
    while (nextPhrase.length > 32 || nextPhrase.length < 1) {
      nextPhrase = prompt("Error, please try again make sure it is between 1 and 26 characters");
    }
  } else{
     difficulty = cvp;
  }
} 
