
function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3);
    if(compChoice === 0)
        return "rock";
        else if(compChoice === 1)
        return "paper";
        else 
        return "scissor";
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection === 'rock' && computerSelection === 'rock')
        return ["It's a tie!", "tie", computerSelection];
    if(playerSelection === 'rock' && computerSelection === 'paper')
        return ["You lose! Paper beats Rock!", "lose", computerSelection];
    if(playerSelection === 'rock' && computerSelection === 'scissor')
        return ["You Win! Rock beats Scissor!", "win", computerSelection];
    
    if(playerSelection === 'paper' && computerSelection === 'paper')
        return ["It's a tie!", "tie", computerSelection];
    if(playerSelection === 'paper' && computerSelection === 'rock')
        return ["You Win! Paper beats rock!", "win", computerSelection];
    if(playerSelection === 'paper' && computerSelection === 'scissor')
        return ["You lose! Scissor beats Paper!", "lose", computerSelection];
    
    if(playerSelection === 'scissor' && computerSelection === 'scissor')
        return ["It's a tie!", "tie", computerSelection];
    if(playerSelection === 'scissor' && computerSelection === 'rock')
        return ["You lose! Rock beats Scissor!", "lose", computerSelection];
    if(playerSelection === 'scissor' && computerSelection === 'paper')
        return ["You Win! Scissor beats Paper!", "lose", computerSelection];
  }

function game(playerChoice){
    playRound();
}  

  
  const playerSelection = window.prompt("What is your selection");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
