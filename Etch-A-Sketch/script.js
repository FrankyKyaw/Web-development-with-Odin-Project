let board = document.querySelector(".board");
board.style.gridTemplateColumns = "repeat(16,1fr)"
board.style.gridTemplateRows = "repeat(16,1fr)"


function initGrid(){
  for (let i=0; i<256; i++){
    let square = document.createElement('div');
    square.style.background = 'blue';
    board.insertAdjacentElement("beforeend", square);
  }
}

initGrid();