
let shouldResetScreen = false;
let evaluated = false;

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
                    evaluated = true;
                } catch{
                    curScreen.innerText = 'Error!';
                }
                break
            default:
                if (curScreen.innerText === '0' || evaluated === true) {
                    curScreen.innerText = e.target.innerText;
                    evaluated = false;
                }
                else{
                    curScreen.innerText += e.target.innerText;
                    }

                }
                
        }
    )
)

function resetScreen(){
    curScreen.textContent = ''
    shouldResetScreen = false
}

