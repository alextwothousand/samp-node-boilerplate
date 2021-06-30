import chalk from "chalk";
import { OnPlayerCommandText } from "samp-node-lib";
import { handlePlayerCmdText } from "../systems/command";

OnPlayerCommandText(handlePlayerCmdText);

console.log(chalk.blueBright.bold("Loaded events/onPlayerCommandText.ts"));