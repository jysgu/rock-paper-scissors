let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const a = Math.floor(Math.random() * 3 + 1);
	if (a === 1){
		return "rock";
	}
	else if (a === 2){
		return "paper";
	}
	else if (a === 3){
		return "scissors";
	}
	else
	console.log("");
}

function getHumanChoice() {
	let choice = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
	return choice;
}

function playRound() {
	let humanChoice = getHumanChoice();
	let computerChoice = getComputerChoice();

	console.log(`Player choice: ${humanChoice} \nComputer choice: ${computerChoice}`);

	if (humanChoice === null || humanChoice === "" || !/^(rock|paper|scissors)$/.test(humanChoice)){
		alert("Only type Rock, Paper or Scissors!");
		return;
	}

	if (humanChoice === computerChoice) {
		console.log("It's a draw!");
	} else if ((humanChoice === "rock" && computerChoice === "scissors") || 
	(humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors"
	&& computerChoice === "paper")) {
		console.log(`${humanChoice} beats ${computerChoice}! You win!`);
		humanScore++;
	} else {
		console.log(`${computerChoice} beats ${humanChoice}! You lose!`);
		computerScore++;
	}

	console.log(`Player score: ${humanScore} Computer Score: ${computerScore}`);
}

function playGame(){
	for (let turn = 0; turn <5; turn++){
		playRound();
	}

	if (humanScore > computerScore) {
		console.log("You win!");
	} else if (humanScore < computerScore) {
		console.log("You lose!");
	} else {
		console.log("Draw!");
	}
}

playGame();