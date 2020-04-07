class Dashes {

  constructor(x, y, phrase) {
    this.x = x;
    this.y = y;
    this.phrase = phrase.toUpperCase().trim();
    this.splitedPhrase = split(this.phrase, "")
    this.counter;
    this.lastKey;
    this.numOfWrongs = 0;
    this.lettersUsed = [];
    this.blanks = [];
    this.wrongLetters = [];
    this.wordsInPhrase = split(this.phrase, " ");
    this.safeLength = 0;
    this.minus = 0;
    this.lost = false;
    this.playAgain = false;
  }

  //fixes the lines of code to make sure a word is not cut off
  spaceFix() {
    for (var i = 0; i < this.wordsInPhrase.length; i++) {
      this.wordsInPhrase[i] += " ";
    }

    while((this.splitedPhrase.length > 13 && this.splitedPhrase[12].toUpperCase() != this.splitedPhrase[12].toLowerCase() && this.splitedPhrase[13].toUpperCase() != this.splitedPhrase[13].toLowerCase()) || (this.splitedPhrase.length > 26 && this.splitedPhrase[25].toUpperCase() != this.splitedPhrase[25].toLowerCase() && this.splitedPhrase[26].toUpperCase() != this.splitedPhrase[26].toLowerCase())) {
      var indexOfNeededSpace = 0;
      if (this.splitedPhrase.length > 13 && this.splitedPhrase[12].toUpperCase() != this.splitedPhrase[12].toLowerCase() && this.splitedPhrase[13].toUpperCase() != this.splitedPhrase[13].toLowerCase()) {
        var replaceWithSpaces = 0;
        for (var i = 12; i > 0; i--) {
          if (this.splitedPhrase[i] != " ") {
            replaceWithSpaces++;
          } else {
            indexOfNeededSpace = i;
            break;
          }
        }

        if (replaceWithSpaces < 12) {
          for (var j = 0; j <= replaceWithSpaces; j++) {
            this.splitedPhrase.splice(indexOfNeededSpace, 0, " ");
          }
        }
      }
      indexOfNeededSpace = 0;
      if (this.splitedPhrase.length > 26 && this.splitedPhrase[25].toUpperCase() != this.splitedPhrase[25].toLowerCase() && this.splitedPhrase[26].toUpperCase() != this.splitedPhrase[26].toLowerCase()) {
        var replaceWithSpaces = 0;
        for (var i = 25; i > 12; i--) {
          if (this.splitedPhrase[i] != " ") {
            replaceWithSpaces++;
          } else {
            indexOfNeededSpace = i;
            break;
          }
        }

        for (var j = 0; j <= replaceWithSpaces; j++) {
          this.splitedPhrase.splice(indexOfNeededSpace, 0, " ");
        }
      }
    }
    
      while (this.splitedPhrase[13] == " ") {
        this.splitedPhrase.splice(13, 1);
      }
      while (this.splitedPhrase[26] == " ") {
        this.splitedPhrase.splice(26, 1);
      }
  }

  //converts the phrase into an array of dashes
  convertor() {
    for (var i = 0; i < this.splitedPhrase.length; i++) {
      if (this.splitedPhrase[i] != this.splitedPhrase[i].toLowerCase()) {
        this.blanks[i] = ' _';
      } else {
        this.blanks[i] = this.splitedPhrase[i];
      }
    }
  }
  
  //Draws the dashes and the correct letters on the screen
  displayBlanks() {
    strokeWeight(1)
    textSize(15);
    textAlign(CENTER)
    textSize(26);
    var Xpos = 29;
    var Ypos = 300;
    for (var i = 0; i < this.blanks.length; i++) {
      if (i % 13 == 0 && i != 0) {
        Ypos += 32;
        Xpos -= 364;
      }
      text(this.blanks[i], Xpos + (i * 28), Ypos)
    }
    textAlign(LEFT);
  }
  displayDificalty(diff) {
    difficulty = diff;
    textSize(15);
    if (difficulty == 4) {
      text("Phrase:", 19, 273);

    } else if (difficulty == 2) {
      text("Mediocre phrase:", 19, 273);

    } else if (difficulty == 3) {
      text("Hard phrase:", 19, 273);

    } else if (difficulty == 1) {
      text("Easy phrase:", 19, 273);
    } else {
      text("Your phrase:", 19, 273);
    }
  }

  //displays the key in the key box, when the enter key in pressed it check if the word in in the phrase. 
  //If it is in the phrase it will display it on screen. 
  //If it is not in the phrase then it will be displayed in the incorrect guesses box
  displayKey() {
    var keyVal = key;
    //checks if the key prseed is a char
    if (keyVal.toUpperCase() != keyVal.toLowerCase() && keyVal.length == 1) {
      this.lastKey = keyVal.toUpperCase();
      text(keyVal.toUpperCase(), 203, 180)
      this.counter = 0;
    }
    //check when the enter key is pressed; when it is it check if the letter is in the phrase or not
    if (keyIsDown(13) && this.counter == 0 && !this.lost) {
      var repeat = false
      var inPhrase = false;
      //checks if the leter is in the phrase or not
      for (var i = 0; i < this.splitedPhrase.length; i++) {
        if (this.splitedPhrase[i] == this.lastKey) {
          this.blanks[i] = this.splitedPhrase[i];
          text(this.blanks[i], (i * 30), 340)
          inPhrase = true;
        }
      }
      for (var j = 0; j <= this.lettersUsed.length; j++) {
        if (this.lastKey != this.lettersUsed[j]) {
          this.counter++;
        } else repeat = true  
      }
      if (inPhrase == false && repeat == false) {
        this.numOfWrongs++;
      }
      if (this.counter != 0 && !repeat && !inPhrase) {
        this.lettersUsed.push(this.lastKey);
      }
    }
    //displays the wrong letters
    textSize(20);
    var Ypos = 70;
    var Xpos = 203;
    for (var i = 0; i < this.lettersUsed.length; i++) {
      if (i % 7 == 0 && i != 0) {
        Ypos += 23;
        Xpos -= 175;
      }
      text(this.lettersUsed[i], Xpos + i * 25, Ypos);
    }
  }

  //Shows the man on screen based on the amount of letters wrong
  hangTheMan() {
    //draws the head
    if (this.numOfWrongs >= 1) {
      noFill()
      ellipse(this.x, this.y, 35, 35);
      fill(255, 255, 255, 255)
    }
    //draws the back
    if (this.numOfWrongs >= 2) {
      rect(this.x, this.y + 20, 1, 50);
    }
    //draws the right arm
    if (this.numOfWrongs >= 3) {
      line(this.x, this.y + 42, this.x - 25, this.y + 17);
    }
    //draws left arm
    if (this.numOfWrongs >= 4) {
      line(this.x, this.y + 42, this.x + 25, this.y + 17);
    }
    //draws the right leg
    if (this.numOfWrongs >= 5) {
      line(this.x, this.y + 68, this.x - 25, this.y + 89);
    }
    //draws left leg and loss screen
    if (this.numOfWrongs >= 6) {
      line(this.x, this.y + 68, this.x + 25, this.y + 89);
      this.lost = true;
      //covers unwanted draws
      strokeWeight(1);
      fill('#537960');
      strokeWeight(0);
      rect(13, 261, 362, 95);
      //draws play Again box
      textSize(40);
      strokeWeight(3);
      rect(228, 233, 125, 36);
      strokeWeight(1);
      fill('#ffffff');
      //draws you lost, play again, and correct phrase text
      textSize(30);
      text("You lose :(", 225, 220);
      textSize(23)
      text("Play Again?", 234, 258)
      textSize(15);
      text("Correct phrase:", 19, 273);
      textSize(28);
      textAlign(CENTER);
      //draws text for the correct phrase
      var Xpos = 29;
      var Ypos = 300;
      for (var i = 0; i < this.blanks.length; i++) {
        if (i % 13 == 0 && i != 0) {
          Ypos += 32;
          Xpos -= 364;
        }
        text(this.splitedPhrase[i], Xpos + (i * 28), Ypos)
      }
      textAlign(LEFT);
      if (mouseX > 228 && mouseX < 353 && mouseY > 233 && mouseY < 269 && mouseIsPressed) {
        this.playAgain = true;
      }
    }
  }
  
  
  //check if the player has guesed the correct phrase
  winCheck() {
    if (this.blanks.indexOf(" _") == -1) {
      this.lost = true;
      //covers unwanted draws
      strokeWeight(1);
      fill('#537960');
      strokeWeight(0);
      rect(13, 261, 362, 95);
      textSize(40);
      strokeWeight(3);
      rect(228, 233, 125, 36);
      //draws you won, play again, and correct phrase text
      strokeWeight(1);
      fill('#ffffff');
      textSize(32);
      text("You won!!!", 225, 220);
      textSize(23)
      text("Play Again?", 234, 258)
      textSize(15);
      text("Correct phrase:", 19, 273);
      //draws the correct phrase text
      textSize(28);
      textAlign(CENTER);
      var Xpos = 29;
      var Ypos = 300;
      for (var i = 0; i < this.blanks.length; i++) {
        if (i % 13 == 0 && i != 0) {
          Ypos += 32;
          Xpos -= 364;
        }
        text(this.splitedPhrase[i], Xpos + (i * 28), Ypos)
      }
      textAlign(LEFT);
      if (mouseX > 228 && mouseX < 353 && mouseY > 233 && mouseY < 269 && mouseIsPressed) {
        this.playAgain = true;
      }
    }
  }

  //geter and setter method for playAgain
  isPlayAgain() {
    return this.playAgain;
  }
  setPlayAgain(playing) {
    this.playAgain = playing;
  }
  //restes goloal variables for anew phrase
  reset(newPhrase) {
    this.phrase = newPhrase.toUpperCase().trim();
    this.splitedPhrase = split(this.phrase, "")
    this.numOfWrongs = 0;
    this.lettersUsed = [];
    this.blanks = [];
    this.wrongLetters = [];
    this.wordsInPhrase = split(this.phrase, " ");
    this.safeLength = 0;
    this.minus = 0;
    this.lost = false;
    this.playAgain = false;

  }


}