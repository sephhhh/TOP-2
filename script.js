function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else {
        return "scissor"
    }
    

    //problem: randomly return rock, paper or scissors

    /*plan: 
    1. randomly select a number from range 1-3 inclusive
    2. if number is 1 then return rock
    3. if number is 2 then return paper
    4. if number is 3 then return scissor 
        
    /*that will randomly return either ‘Rock’, 
    ‘Paper’ or ‘Scissors’. We’ll use this function 
    in the game to make the computer’s play. 
    Tip: use the console to make sure this is 
    returning the expected output before moving 
    to the next step! */
}

function playRound(computerSelection) {
    const playerSelection = prompt("Enter Rock, Paper or Scissors: ").toLowerCase()
    if (playerSelection === computerSelection) {
        console.log("tie");
        return "tie";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissor"){
            console.log("You Win! Rock beats Scissor");
            return "win";
        } else {
            console.log("You Lose! Paper beats Rock");
            return "loss";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("You Win! Paper beats Rock");
            return "win";
        } else {
            console.log("You Lose! Scissor beats Paper");
            return "loss";
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            console.log("You Win! Scissor beats Paper");
            return "win";
        } else {
            console.log("You Lose! Rock beats Scissor");
            return "loss";
        }
    }


    //problem: take the players selection and computers selection to find out who won the game
    /* plan:
    1. convert playerSelection to lowercase
    2. if playerSelection is equal to computerSelection return "tie"
    3. if playerSelection is rock and computerSelection is paper return "You Lose! Paper beats Rock"
       else if computerSelection is scissor return "You Win! Rock beats Scissor"
    4. if playerSelection is paper and computerSelection is rock return "You Win! Paper beats Rock"
       else if computerSelection is scissor return "You Lose! Scissor beats Paper"
    5. if playerSelection is scissor and computerSelection is rock return "You Lose! Rock beats Scissor"
       else if computerSelection is paper return "You Lose! Scissor beats Paper"

    */


    //return a string that declares the winner of the round 
    //like so: "You Lose! Paper beats Rock"
}

function game(round, computer) {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= 5; i++) {
        computerChoice = computer();
        theGame = round(computerChoice);
        if (theGame === "win") {
            playerWins ++;
        } else if (theGame === "loss") {
            computerWins ++;
        }
    }
    if (playerWins == computerWins) {
        console.log("It's a Tie!");
        return;
    } else if (playerWins > computerWins) {
        console.log("You Won!");
        return;
    } else {
        console.log("You Lost!")
        return;
    }

    //problem: play 5 rounds of the game

    /* plan
    1. for i = 1 to i = 5 output round
    2. add one to each win the player gets
    3. add one to each win the computer gets
    4. nothing if its a tie
    5. if player has more wins than the computer then print player has won
    */
}

game(playRound, getComputerChoice);