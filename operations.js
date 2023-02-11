
// function to randomly return either 'Rock', 'Paper', or 'Scissors'
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log("this", playerSelection)
  if( playerSelection === 'rock' || 
  playerSelection === 'paper' ||playerSelection === 'scissors')
  {
  if(playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors' ||
      playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock' ||
      playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper') {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection.toLowerCase()) {
    return 'Draw';
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } 
  }
   else 
  {
    alert("You entered a wrong text")

  return "you entered a wrong text"
}

}
}


// function to play a 5 round game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log("round", i+1)
    let playerSelection = prompt("Enter Rock, Paper, or Scissors:");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result && result.toLowerCase().startsWith("you win")) {
      playerScore++;
    } else if (result && result.toLowerCase().startsWith("you lose")) {
      computerScore++;
    }
    else{
      console.log(result);
    }
  }
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game.");
  } else {
    console.log("The game is a draw.");
  }
}
