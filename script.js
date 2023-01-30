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
            scores[1]++
            return "You Lose! Paper beats Rock"
        }else if(computerSelection == "scissors"){
            scores[0]++;
            return "You Win! Rock beats Scissors"
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            scores[0]++
            return "You Win! Paper beats Rock"
        }else if(computerSelection == "paper"){
            return "Tie!"
        }else if(computerSelection == "scissors"){
            scores[1]++
            return "You Lose! Scissors beats Paper"
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == "rock"){
            scores[1]++
            return "You Lose! Rock beats Scissors"
        }else if(computerSelection == "paper"){
            scores[0]++;
            return "You Win! Scissors beats paper"
        }else if(computerSelection == "scissors"){
            return "Tie!"
        }
    }
}
   
function game(){
    const playerSelection = playerSelect()
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
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

let scores = [0, 0]

let results = document.querySelector("#results")

document.querySelector("#buttons").addEventListener('click', function(e){
    document.querySelector("#result").innerHTML = playRound(e.target.alt, getComputerChoice())
    if(scores[0] == 5){
        results.style.fontSize = "400%"
        results.innerHTML = "YOU WIN!<br><button id='restart'>Click Here to Restart</button>"
    }else if(scores[1] == 5){
        results.style.fontSize = "400%"
        results.innerHTML = "COMPUTER WINS :(<br><button id='restart' onClick='window.location.reload();'>Click Here to Restart</button>"
    }
    document.querySelector("#playerScore").innerHTML = "Your score is: " + scores[0]
    document.querySelector("#computerScore").innerHTML = "The computer's score is: " + scores[1]
})