
const sizeText = document.querySelector('.sizeValue');
const sizeSlider = document.querySelector('.sizeSlider');
const black = document.querySelector('.black');
const color2 = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');

let color = 'black';

function initGrid(size){
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`; 
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++){
    let square = document.createElement('div');
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = 'white';
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

function colorSquare(){
  this.style.backgroundColor = color;
}

function changeColor(choice){
  color = choice;
}



