function Board(){
  function arrayConverter(htmlElementArray){
    return Array.prototype.slice.call(htmlElementArray);
  }

  var board = this.board = [
    [{},{},{}],
    [{},{},{}],
    [{},{},{}]
  ];

  var boardElement = document.getElementById('boardElement');

  var rowArray = arrayConverter(boardElement.children);

  rowArray.forEach(function(row, rowIndex){
    var colArray = arrayConverter(row.children);
    colArray.forEach(function(cellHtmlRef, colIndex){
      board[rowIndex][colIndex]['htmlRef'] = cellHtmlRef;
      board[rowIndex][colIndex]['value'] = null;
    });
  });
}

Board.prototype.setCell = function(rowIndex, colIndex, value){
  this.board[rowIndex][colIndex]['value'] = value;
};

Board.prototype.render = function(){
  this.board.forEach(function(row){
    row.forEach(function(cell){
      cell.htmlRef.textContent = cell.value
    });
  });
};
