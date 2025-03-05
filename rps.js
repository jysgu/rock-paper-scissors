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

