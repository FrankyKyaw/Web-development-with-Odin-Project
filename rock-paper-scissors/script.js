
const choices = ["rock", "scissor", "paper"];
let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getComputerSelection(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    for (let i=0; i<1; i++) {
        let player = choices.indexOf(playerSelection);
        let comp = choices .indexOf(computerSelection);
        if ((player + 1) % 3 === comp){
            playerScore++;
        }
        else if (comp === player){

        }
        else{
            computerScore++;
        }
    }
}




function whenClicked(playerChoice){
    const computerChoice = getComputerSelection();
    updateChoices(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
    updateScore();
    
}

function updateChoices(playerChoice, computerChoice){
    switch(playerChoice){
        case 'rock':
            playerIcon.textContent = '✊';
            break;
        case 'paper':
            playerIcon.textContent = '✋';
            break;
        case 'scissor':
            playerIcon.textContent = '✌';
    }

    switch(computerChoice){
        case 'rock':
            computerIcon.textContent = '✊';
            break;
        case 'paper':
            computerIcon.textContent = '✋';
            break;
        case 'scissor':
            computerIcon.textContent = '✌';
    }
    
}

function updateScore(){
    player_score.textContent = `Player: ${playerScore}`;
    computer_score.textContent = `Computer: ${computerScore}`;
}

const rockBtn = document.querySelector('.button#rock');
const paperBtn = document.querySelector('.button#paper');
const scissorBtn = document.querySelector('.button#scissor');
const playerOptions = [rockBtn, paperBtn, scissorBtn];
const playerIcon = document.querySelector('.player-icon');
const computerIcon = document.querySelector('.computer-icon');
const player_score = document.querySelector('.player-score');
const computer_score = document.querySelector('.computer-score');


rockBtn.addEventListener('click', () => whenClicked('rock'));
paperBtn.addEventListener('click', () => whenClicked('paper'));
scissorBtn.addEventListener('click', () => whenClicked('scissor'));
