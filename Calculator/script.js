
let shouldResetScreen = false;
let currentOperation = null;

const buttons = document.querySelectorAll('.btn');
const numberBtn = document.querySelectorAll('#number');
const operatorBtn = document.querySelectorAll('#operator');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const curScreen = document.querySelector('.display');


buttons.forEach((button) =>
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                curScreen.innerText = '0';
                break;
            case 'Del':
                if (curScreen.innerText.length === 1){
                    curScreen.innerText = '0';
                }
                else{
                    curScreen.innerText = curScreen.innerText.slice(0,-1);
                }
                break
            case '=':
                
                try{
                    curScreen.innerText = eval(curScreen.innerText);
                } catch{
                    curScreen.innerText = 'Error!';
                }
                break
            default:
                if (curScreen.innerText === '0') {
                    curScreen.innerText = e.target.innerText;
                }
                else{
                    curScreen.innerText += e.target.innerText;
                    }

                }
                
        }
    )
)


function displayNumber(number){
    if (curScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
    curScreen.textContent += number;
}

function resetScreen(){
    curScreen.textContent = ''
    shouldResetScreen = false
}

