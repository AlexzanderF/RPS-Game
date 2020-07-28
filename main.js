// Scores
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById('comp-score');
let scoreBoard_div = document.querySelector('.scoreboard');
let resultUserMessage_span = document.getElementById('result-user');
let resultCompMessage_span = document.getElementById('result-comp');
let resultMessage_p = document.querySelector('.message p');
// Hand signs  
let rock_div = document.getElementById('r');
let paper_div = document.getElementById('p');
let scissors_div = document.getElementById('s');

let userScore = 0;
let compScore = 0;

function getCompChoice() {
    let choices = ["r", "p", "s"];
    let random = Math.floor(Math.random() * 3); //gets a number between 0 and 3
    return choices[random];
}

function convertLetters (letter){  //the letter is the input from compChoice or userChoice !!!
   switch (letter){
       case "r":
           return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
   }
}

function win(userChoice, compChoice){
    console.log(compChoice.toUpperCase()); // tracking result
    userScore++;
    userScore_span.innerHTML = userScore; //changes scoreboard
    resultMessage_p.innerHTML = `<span id="result-user">${convertLetters(userChoice)}</span> beats <span id="result-comp">${convertLetters(compChoice)}</span>!You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 1000);
}

function lose(userChoice, compChoice){
    console.log(compChoice.toUpperCase()); 
    compScore++;
    compScore_span.innerHTML = compScore;
    resultMessage_p.innerHTML = `<span id="result-user">${convertLetters(userChoice)}</span> loses to <span id="result-comp">${convertLetters(compChoice)}</span>!You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 1000);
}

function draw(userChoice){
    resultMessage_p.innerHTML = `It's a <span style="color: rgb(246, 189, 76)">DRAW</span>!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 1000);
}

function game(userChoice) {
    let compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "rs": // win cases 
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp": // lose cases
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
    }
    if (userChoice === compChoice){
       draw(userChoice, compChoice);
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();

