function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

function playRound(computerSelection, playerSelection) {
    let text;
    let result;
    if (playerSelection === computerSelection) {
        text = "Tie!";
        result = "tie";
        return {result , text};
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissor"){
            text = "You Win! Rock beats Scissor";
            result = "win";
            return {result , text};
        } else {
            text = "You Lose! Paper beats Rock";
            result = "loss";
            return {result , text};
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            text = "You Win! Paper beats Rock";
            result = "win";
            return {result , text};
        } else {
            text = "You Lose! Scissor beats Paper";
            result = "loss"
            return {result , text};
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            text = "You Win! Scissor beats Paper";
            result = "win";
            return {result , text};
        } else {
            text = "You Lose! Rock beats Scissor";
            result = "loss";
            return {result , text};
        }
    }
}

const playerSelection = document.querySelector('#playerSelection')
const results = document.querySelector('.results');
const winner = results.querySelector('.winner');
const userScore = results.querySelector('.userScore');
const comScore = results.querySelector('.comScore');


let user = 0;
let com = 0;
playerSelection.addEventListener('click', (e) => {
    let selection = e.target.textContent;
    let play = playRound(getComputerChoice(), selection);
    if (play.result === "win") {
        user ++;
        userScore.textContent = `Your Score: ${user}`;
        comScore.textContent = `Computer Score: ${com}`;
        winner.textContent = play.text;
    } else if (play.result === 'loss') {
        com ++;
        userScore.textContent = `Your Score: ${user}`;
        comScore.textContent = `Computer Score: ${com}`;
        winner.textContent = play.text;
    } else {
        userScore.textContent = `Your Score: ${user}`;
        comScore.textContent = `Computer Score: ${com}`;
        winner.textContent = play.text;
    }

    if (user >= 5) {
        userScore.remove();
        comScore.remove();
        winner.textContent = "You're the Winner!"
    } else if (com >= 5) {
        userScore.remove();
        comScore.remove();
        winner.textContent = "You Lost!"
    }
})