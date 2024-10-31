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

function getHumanChoice(){
    let correct = false;
    let choice = ''
    while(!correct){
        choice = prompt("What will you throw? (rock, paper, or scissors)", '').toLowerCase();
        if(choice === 'rock' || choice === 'paper' || choice === 'scissors'){
            correct = true;
        }
    }

    return choice;
}


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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundResult = '';

    for(let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        roundResult = playRound(humanChoice, computerChoice);

        if(roundResult === 'win'){
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
        }
        else if(roundResult === 'lose'){
            computerScore++
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
        }
        else{
            console.log(`You Tie! ${humanChoice} ties ${computerChoice}!`);
        }
    }

    if(humanScore > computerScore){
        console.log(`You Win!  Human:${humanScore}  Computer:${computerScore}`)
    }
    else if(computerScore > humanScore){
        console.log(`You Lose!  Human:${humanScore}  Computer:${computerScore}`)
    }
    else{
        console.log(`You Tie! Human:${humanScore}  Computer:${computerScore}`)
    }
}

playGame();