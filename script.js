console.log("hello world");

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)

    if(randomNumber === 0){
        return "rock"
    } 
    else if(randomNumber === 1){
        return "paper"
    } 
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice : rock, paper, scissors")
    return choice
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("The game is Tie");
    } 
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log("You Win " + humanChoice + " beats " + computerChoice)
    } 
    else{
        computerScore++;
        console.log("Computer Win " + computerChoice + " beats " + humanChoice)
    }

    console.log("Your Score: " + humanScore + " Computer Score: " + computerScore)
}

for(let i = 1; i <= 5; i++){
    console.log("Round " + i)

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}


if(humanScore > computerScore){
    console.log("You won the game!");
} 
else if(computerScore > humanScore){
    console.log("Computer won the game!");
} 
else{
    console.log("The game is a tai!");
}