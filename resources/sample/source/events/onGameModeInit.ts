import { logprint, OnGameModeInit } from "samp-node-lib";
import chalk from "chalk";

OnGameModeInit(() => {
	logprint("OnGameModeInit called!");
});

console.log(chalk.blueBright.bold("Loaded events/onGameModeInit.ts"));