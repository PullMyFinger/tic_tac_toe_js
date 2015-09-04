function Game(){}

Game.prototype.start = function () {
  var getInput = function(){
    var input;
    do{
      input = prompt("Human(y/n)?");
    }while(input !== 'y' && input !== 'n');
    return input;
  };
  // initialize board
  this.board = new Board(/*htmlelement*/);

  // ask for player 1 input
  var p1isHuman = getInput() === 'y';

  // initialize player 1
  this.player1 = new Player(p1isHuman);

  // initialize player 2
  var p2isHuman = getInput() === 'y';
  this.player2 = new Player(p2isHuman);
};

Game.prototype.render = function () {
  this.board.render();
};
