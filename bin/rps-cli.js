#!/usr/bin/env node

import minimist from 'minimist';
import rps from "../lib/rpsls.js";
import helpRPS from "../lib/rpsls.js";
import rulesRPS from "../lib/rpsls.js";
const args = minimist(process.argv.slice(2), {
	test: {
     	   rules: "rules"
        }
});

if (args.h || args.help){
	helpRPS();
	
	process.exit();
} else if (args.r || args.rules){
	rules.RPS();
	process.exit();
} else {
 	var banker = args._[0];

	if (!banker) {
		const result = { "player": "rock" };
		console.log(JSON.stringify(result));
		process.exit();
	}

	const result = rps(banker);


	process.exit();
}
