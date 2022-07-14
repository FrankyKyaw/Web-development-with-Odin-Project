
const sizeText = document.querySelector('.sizeValue');
const sizeSlider = document.querySelector('.sizeSlider');


function initGrid(size){
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`; 
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++){
    let square = document.createElement('div');
    square.style.background = 'blue';
    board.insertAdjacentElement("beforeend", square);
  }
}

initGrid(16);

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => updateGrid(e.target.value);

function updateSizeValue(value){
  sizeText.innerHTML = `${value} x ${value}`;
}

function updateGrid(value){
  initGrid(value);
}





