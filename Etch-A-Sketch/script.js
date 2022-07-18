
const sizeText = document.querySelector('.sizeValue');
const sizeSlider = document.querySelector('.sizeSlider');
const black = document.querySelector('.black');
const colorPicker = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset');
const flex = document.querySelector('.flex-container');

let color = 'black';
let currentSize = 16
let mouseDown = false;


document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function initGrid(size){
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`; 
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++){
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.addEventListener('mousedown', colorSquare);
    board.appendChild(square);
    /*
    board.insertAdjacentElement("beforeend", square);
    */

  }
}

initGrid(16);

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => updateGrid(e.target.value);
reset.onclick = () => resetGrid()
colorPicker.addEventListener('input', () => {
  let color = colorPicker.value;
  changeColor(color)
})


function updateSizeValue(value){
  sizeText.innerHTML = `${value} x ${value}`;
}

function resetGrid(){
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  squares.forEach((div) => (div.style.backgroundColor = 'white'));

}

function updateGrid(value){
  currentSize = value;
  initGrid(value);
}

function colorSquare(e){

  if (e.type == 'mouseover' && !mouseDown) return
  if (color == 'rainbow'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  else{
    this.style.backgroundColor = color;
  }
  
}
  

function changeColor(choice){
  color = choice;
}



