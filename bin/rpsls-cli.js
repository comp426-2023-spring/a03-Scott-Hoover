import {rpsls, expansionHelp, expansionRules} from "../lib/rpsls.js"
import minimist from "minimist";
const args = minimist(process.argv.slice(2),{
	    alias: {
		            r: "rules"
		        }
});

//add help + rules calling
switch(true) {
    case (args.h || args.help):
            expansionHelp();
            process.exit();
    case (args.r || args.rules):
            expansionRules();
            process.exit()
    default:
         var playerChoice = args._[0];

         if (!playerChoice) {
                 const result = { "player": "rock"};
                 console.log(JSON.stringify(result));
                 process.exit();
         }
                                                                                        

     playerChoice = playerChoice.toLowerCase;
                                                                                                                             const result = rpsls(playerChoice);


     if (!(typeof result == "undefined")) {
                                                                                                                                 console.log(JSON.stringify(result));
                                                                                                                                process.exit();
     }
     process.exit();
 }
