// Make game array

const rpsInputs = ["rock", "paper", "scissors"]
const rpslsInputs = ["rock, paper", "scissors", "lizard", "spock"]

export function rps(inputchoice) {

	if (!rpsInputs.includes(inputchoice)){
		//return rules
		console.error(`${inputchoice} is out of range.`);
		rulesRPS();
	        helpRPS();
	        return;


	}
	//randomize opponent
	const random_opponent = rpsInputs[Math.floor(Math.random() * 3)];
	//see tie
	if (inputchoice == random_opponent) { 
        	return { 
            		"player": inputchoice,
            		"opponent": random_opponent,
            		"result": "tie"
        	};
        };
	
	//see winner  
	
	if ((inputchoice == "paper" && random_opponent == "rock") ||
	   (inputchoice == "scissors" && random_opponent == "paper") ||
	      (inputchoice == "rock" && random_opponent == "scissors")) {
		return {
			"player": inputchoice,
			"opponent": random_opponent,
			"result": "win"
		};
	} else {
		return {
			"player": inputchoice,
			"opponent": random_opponent,
			"result": "lose"
		};
	}
}
export function rpsls(inputchoice){

	if (!rpslsInputs.includes(inputchoice)){
		console.error(`${inputchoice} is out of range.`);
		rulesRPSLS();
		helpRPSLS();
		return;
	}
	



}

export function helpRPS() {
	console.log(`Usage: node-rps [SHOT]
	Play Rock Paper Scissors (RPS)

            -h, --help      display this help message and exit
	    -r, --rules     display the rules and exit

	Examples:
	          node-rps        Return JSON with single player RPS result.
		                  e.g. {"player":"rock"}
		  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
		                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);

	return;
}
export function rulesRPS() {
	console.log(`Rules for Rock Paper Scissors:

		  - Scissors CUTS Paper
		  - Paper COVERS Rock
		  - Rock CRUSHES Scissors`);
	return;
}









