let playerScore = 0
let computerScore = 0
function computerPlay(){
	const x = Math.floor(Math.random() * 10 + 1);
	if (x == 5)
		return 'rock';
	else if (x > 5)
		return 'paper';
	else if (x < 5)
		return 'scissors';

}

function playRound(playerSelection, computerSelection){

	playerSelection = playerSelection.toLowerCase();
	if (playerSelection == computerSelection)
		return alert('Draw! Try again!')
	else if (playerSelection == 'rock' && computerSelection == 'paper'){
		computerScore++;
		return alert('You lose!');
	}
	else if (playerSelection == 'rock' && computerSelection == 'scissors'){
		playerScore++;
		return alert('You win!')
	}
	else if (playerSelection == 'paper' && computerSelection == 'scissors'){
		computerScore++;
		return alert('You lose!');
	}
	else if (playerSelection == 'paper' && computerSelection == 'rock'){
		playerScore++;
		return alert('You win!');
	}
	else if (playerSelection == 'scissors' && computerSelection == 'rock'){
		computerScore++;
		return alert('You lose!');
	}
	else if (playerSelection == 'scissors' && computerSelection == 'paper'){
		playerScore++;
		return alert('You win!');
	}
	else 
		return prompt('Please Try Again');

}

function scoreBoard(){
	if (playerScore > computerScore)
		return alert('you won the g my g');
	else if (computerScore > playerScore)
		return alert('You lost my guy')
	else if (playerScore = computerScore){
		alert('Tie game! Go again!');
		console.log(game());
	}
}

function game(){
	for (let i = 0; i < 5; i++){
	 playRound(prompt('Pick a move..'), 'rock');}
	 scoreBoard();
	}





console.log(game());


