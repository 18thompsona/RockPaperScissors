const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

rockButton.addEventListener("click", () => {
    playGame('rock');
});
paperButton.addEventListener("click", () => {
    playGame('paper');
});
scissorsButton.addEventListener("click", () => {
    playGame('scissors');
});

const results = document.querySelector("#results");
const playerScore = document.querySelector("#score-player");
const computerScore = document.querySelector("#score-computer");
const heading = document.querySelector("#heading");

let runningHumanScore = 0;
let runningComputerScore = 0;






function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);

    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
    return 'rock';
}

//Unused
// function getHumanChoice(){
//     let correct = false;
//     let choice = ''
//     while(!correct){
//         choice = prompt("What will you throw? (rock, paper, or scissors)", '').toLowerCase();
//         if(choice === 'rock' || choice === 'paper' || choice === 'scissors'){
//             correct = true;
//         }
//     }

//     return choice;
// }


function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        return 'Tie'
    }
    if(humanChoice === 'rock' && computerChoice === 'scissors'){
        return 'win'
    }
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        return 'lose'
    }
    if(humanChoice === 'paper' && computerChoice === 'rock'){
        return 'win'
    }
    if(humanChoice === 'paper' && computerChoice === 'scissors'){
        return 'lose'
    }
    if(humanChoice === 'scissors' && computerChoice === 'paper'){
        return 'win'
    }
    if(humanChoice === 'scissors' && computerChoice === 'rock'){
        return 'lose'
    } 
}

function playGame(choice){
    if(runningHumanScore<5 && runningComputerScore<5)
    {
        let roundResult = '';

        let computerChoice = getComputerChoice();
        let humanChoice = choice//getHumanChoice();
        roundResult = playRound(humanChoice, computerChoice);

        if(roundResult === 'win'){
            runningHumanScore++;
            results.textContent = `You Win! ${humanChoice} beats ${computerChoice}!`;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
            playerScore.textContent = `Your Score: ${runningHumanScore}`;
            computerScore.textContent = `Computer Score: ${runningComputerScore}`;
        }
        else if(roundResult === 'lose'){
            runningComputerScore++;
            results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}!`
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
            playerScore.textContent = `Your Score: ${runningHumanScore}`;
            computerScore.textContent = `Computer Score: ${runningComputerScore}`;
        }
        else{
            results.textContent = `You Tie! ${humanChoice} ties ${computerChoice}!`
            console.log(`You Tie! ${humanChoice} ties ${computerChoice}!`);
            playerScore.textContent = `Your Score: ${runningHumanScore}`;
            computerScore.textContent = `Computer Score: ${runningComputerScore}`;
        }


        {
            if(runningHumanScore > runningComputerScore){
                heading.textContent = `You Win!`;
            }
            else if(runningComputerScore > runningHumanScore){
                heading.textContent = `You Lose!`;
            }
            else{
                heading.textContent = `You Tie!`;
            }
        }
    }

    
}



// playGame();