function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return "Tie!"
        }else if(computerSelection == "paper"){
            return "You Lose! Paper beats Rock"
        }else if(computerSelection == "scissors"){
            return "You Win! Rock beats Scissors"
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "You Win! Paper beats Rock"
        }else if(computerSelection == "paper"){
            return "Tie!"
        }else if(computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper"
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            return "You Lose! Rock beats Scissors"
        }else if(computerSelection == "paper"){
            return "You Win! Scissors beats paper"
        }else if(computerSelection == "scissors"){
            return "Tie!"
        }
    }
}
   
function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = playerSelect()
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playerSelect(){
    let playerSelection = window.prompt("Rock, Paper, or Scissors").toLowerCase()
    let choices = ["rock", "paper", "scissors"]
    if(!choices.includes(playerSelection)){
        playerSelect()
    }else{
        return playerSelection;
    }  
}

game()