#!/usr/bin/env node


import minimist from 'minimist';
import { rpsls, helpRPSLS, rulesRPSLS } from "../lib/rpsls.js";
const args = minimist(process.argv.slice(2));

if (args.h || args.help){
	helpRPSLS();
		
	process.exit();
} else if (args.r || args.rules){
	rulesRPSLS();
	process.exit();
} else {
	var banker = args._[0];
	if (!banker) {
		const result = { "player": "rock" };
		console.log(JSON.stringify(result));
		process.exit();
	}
	banker = banker.toLowerCase();
	const result = rpsls(banker);

	if (!(typeof result == "undefined")) {
		console.log(JSON.stringify(result));
		process.exit();
	}


process.exit();
}
