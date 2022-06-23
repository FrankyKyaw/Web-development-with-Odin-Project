console.log("Hello, World!")

const choices = ["rock", "scissor", "paper"];
function computerPlay(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
/*
function playRound(){
    for (let i=0; i<1; i++) {
        const computerSelection = computerPlay();
        console.log("The computer picked", computerSelection);
        
        let playerSelection = prompt("Enter rock, paper or scissor: ");
        let player = choices.indexOf(playerSelection);
        let comp = choices .indexOf(computerSelection);
        if ((player + 1) % 3 === comp){
            console.log("You win!");
        }
        else if (comp === player){
            console.log("It's a tie!");
        }
        else{
            console.log("The computer wins!");
        }
    }
}


array = ["a", "b", "c"];
console.log(array.indexOf("a"));
playRound();
*/
