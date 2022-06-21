console.log("Hello, World!")

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function playRound(playerSelection, computerSelection){

}

const computerSelection = computerPlay();
console.log(computerPlay());