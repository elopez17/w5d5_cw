const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Array.prototype.last = function() {
  return this[this.length - 1];
};

class Game {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  promptUser() {
    reader.question('Where do you want to move from. Array index style (start_pos)', function(response){
      reader.question('Where do you want to move from. Array index style (end_pos)', function(response2) {
        response = parseInt(response);
        response2 = parseInt(response2);
        if (validateMove(response, response2)) {
          executeMove(response, response2);
          if (gameWon() === false) {
            console.log(this.towers);
            promptUser();
          } 
        } else {
          Console.log('not cool, dude');
          promptUser();
        }
      });
    });
  }
  
  validateMove(startPos, endPos) {
    
    if (startPos > 2 ||
      startPos < 0 ||
      endPos > 2 ||
      endPos < 0) {
        return false;
      }
    if (this.towers[startPos][0] == false) {
      return false;
    }
    if (this.towers[endPos].length === 0 || (this.towers[startPos].last < this.towers[endPos].last)) {
      return true;
    }
    return true;
  }
  
  executeMove(start, end) {
    this.towers[end].push(this.towers[start].pop);
  }
  
  gameWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      console.log('You win!');
      return true;
    }
    return false;
  }
  
  run() {
    console.log(this.towers);
    this.promptUser();
    
    // until all of disk are on middle or right tower
    // take a move from user start_pos, end_pos
    //    validates move?
    // executes move
  }
}

let game = new Game();
game.run();