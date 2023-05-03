// Make game array
import minimist from 'minimist';
const rpsInputs = ["rock", "paper", "scissors"]

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
	    const rpslsInputs = ["lizard", "rock", "paper", "scissors", "spock"]
	    const randomvariable = rpslsInputs[Math.floor((Math.random()*rpslsInputs.length))]
	        const argv = minimist(process.argv.slice(2));
		    var user_input;
		        for(var i =2; i < process.argv.length; i+=2){
			        const option = process.argv[i]
				        switch (option){
					            case '-h':
						                    helpRPS()
								                    process.exit(0);

										                case '--help':
	                helpRPS()
	                process.exit(0);
	            case '-r':
	                rulesRPS();
	                process.exit(0);
			            case '--rules':
				                    rulesRPS();
						                    process.exit(0);
								            }
	        user_input = option;
	    }
	    const choice_rules = {
		            lizard: ['spock', 'paper'],
		            rock: ['lizard', 'scissors'],
			            paper: ['rock', 'spock'],
				            scissor: ['paper', 'lizard'],
					            spock: ['scissor', 'rock']
						            }

							        if(user_input === undefined || user_input === null){
								        return `{"player":"${randomvariable}"}`
									    }
									        else if(user_input === randomvariable){
										        return `{"player":"${user_input}","opponent":"${randomvariable}","result":"tie"}`
		        }
	    else if(user_input=='scissors' & randomvariable=='paper' | user_input=='paper' & randomvariable=='rock' | user_input=='rock' & randomvariable=='lizard'|user_input=='lizard' & randomvariable=='spock'|user_input=='spock' & randomvariable=='scissors'|user_input=='scissors' & randomvariable=='lizard'| user_input=='lizard' & randomvariable=='paper' | user_input=='paper' & randomvariable=='spock' | user_input=='spock' & randomvariable=='rock' | user_input=='rock' & randomvariable=='scissors'){
		            return `{"player":"${user_input}","opponent":"${randomvariable}","result":"win"}`
		        }
	    else if(randomvariable=='paper' & user_input=='scissors' | randomvariable=='rock' & user_input=='paper' | randomvariable=='lizard' & user_input=='rock'|randomvariable=='spock' & user_input=='lizard'|randomvariable=='scissors' & user_input=='spock'|randomvariable=='lizard' & user_input=='scissors'| randomvariable=='paper' & user_input=='lizard' | randomvariable=='spock' & user_input=='paper' | randomvariable=='rock' & user_input=='spock' | randomvariable=='scissors' & user_input=='rock'){
	            return `{"player":"${user_input}","opponent":"${randomvariable}","result":"lose"}`
		        }
			    else{
			            rulesRPS()
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







