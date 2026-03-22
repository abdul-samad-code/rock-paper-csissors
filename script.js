console.log("hello world");





let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)
    if(randomNumber === 0){
        return "rock"
    } else if(randomNumber === 1){
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    let resultText = "";
    if(humanChoice === computerChoice){
        resultText = "The game is Tie"
    } 
    else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        resultText = "You Win " + humanChoice + " beats " + computerChoice;
    } 
    else{
        computerScore++;
        resultText = "Computer Win " + computerChoice + " beats " + humanChoice;
    }
    // shpw result in ui
    document.getElementById("result").textContent = resultText;
    document.getElementById("score").textContent = "Your Score: " + humanScore + " Computer score " + computerScore;
     // winner check
     if(humanScore === 5){
        alert("you wom the game");
        resetGame();
     } else if (computerScore === 5 ){
        alert("Computer won the game")
        resetGame();
     }
}

function resetGame(){
    humanScore = 0
    computerScore = 0
    document.getElementById("score").textContent="Your Score: 0 | Computer Score: 0 "
}

document.getElementById("rock").addEventListener("click", function(){
    playRound("rock");
})
document.getElementById("paper").addEventListener("click", function(){
    playRound("paper");
})
document.getElementById("scissors").addEventListener("click", function(){
    playRound("scissors");
})





