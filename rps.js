function getComputerChoice() {
	const a = Math.floor(Math.random() * 3 + 1);
	if (a === 1){
		console.log("rock");
	}
	else if (a === 2){
		console.log("paper");
	}
	else if (a === 3){
		console.log("scissors");
	}
	else
	console.log("");
}

getComputerChoice();