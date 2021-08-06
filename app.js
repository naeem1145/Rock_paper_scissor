let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");





function getComputerChoice(){
    const choices = ['r', 'p', 's'];

    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function game(userChoice){
    const ComputerChoice = getComputerChoice();
    
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "paper";
    return "Scissors";
}

function win(userChoice, ComputerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(ComputerChoice)}.You win.`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')} , 500)

}
function lose(userChoice, ComputerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(ComputerChoice)}.You lost.`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')} , 500)
}
function draw(userChoice, ComputerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} equal ${convertToWord(ComputerChoice)}.it's draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')} , 500)
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch(userChoice + ComputerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, ComputerChoice); 
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, ComputerChoice); 
            break;          
    }
}

function main() { 
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();
