// Make game array

const rpsInputs = ["rock", "paper", "scissors"]
const rpslsInputs = ["rock", "paper", "scissors", "lizard", "spock"]

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
export function rpsls(inputchoice1){

	if (!rpslsInputs.includes(inputchoice1)){
		console.error(`${inputchoice1} is out of range.`);
		rulesRPSLS();
		helpRPSLS();
		return;
	}
	const random_choice = rpslsInputs[Math.floor(Math.random() * 5)];
	if (inputchoice1 == random_choice){
		return {
			"player": inputchoice1,
			"opponent": random_choice,
			"result": "tie"
		};
	};
	if ((inputchoice1 == "scissors" && random_choice == "paper") ||
		(inputchoice1 == "paper" && random_choice == "rock") ||
		(inputchoice1 == "rock" && random_choice == "lizard") ||
		(inputchoice1 == "lizard" && random_choice == "spock") ||
		(inputchoice1 == "spock" && random_choice == "scissors") ||
		(inputchoice1 == "scissors" && random_choice == "lizard") || 
		(inputchoice1 == "lizard" && random_choice == "paper") ||
		(inputchoice1 == "paper" && random_choice == "spock") || 
		(inputchoice1 == "spock" && random_choice == "rock") ||
		(inputchoice1 == "rock" && random_choice == "scissors")){
		return {
			"player": inputchoice1,
			"opponent": random_choice,
			"result": "win"
		};
	} else {
		return {
			"player": inputchoice1,
			"opponent": random_choice,
			"result": "lose"
		};
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

export function helpRPSLS() {
	console.log(`Usage: node-rpsls [SHOT]
	Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
	  -h, --help        display this help message and exit
	    -r, --rules       display the rules and exit
	    Examples:
	      node-rpsls        Return JSON with single player RPSLS result.
	                          e.g. {"player":"rock"}
				    node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
				                        e.g {"player":"rock","opponent":"Spock","result":"lose"}`);
	return;
}

export function rulesRPSLS() {
	console.log(`Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
	  - Scissors CUTS Paper
	    - Paper COVERS Rock
	      - Rock SMOOSHES Lizard
	        - Lizard POISONS Spock
		  - Spock SMASHES Scissors
		    - Scissors DECAPITATES Lizard
		      - Lizard EATS Paper
		        - Paper DISPROVES Spock
			  - Spock VAPORIZES Rock
			    - Rock CRUSHES Scissors`);
	return;
}



