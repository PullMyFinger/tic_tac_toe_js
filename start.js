var game = new Game();

// start up game
// initializes board, player1, player2
game.start();
game.render();
// keep playing until game is over
while( game.isGameOver() === false ){
  // player 1 makes move
  game.player1Move();
  // update board
  game.render();
  // if game over break out loop
  if( game.isGameOver() === false){
    break;
  }
  // player 2 makes move
  game.player2Move();
  // update board
  game.render();
}
// render game over message
game.renderGameOver();
