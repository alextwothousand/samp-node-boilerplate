import chalk from "chalk";
import Hello from "../commands/hello";
import { CommandHandler } from "../systems/command";

// Register our commands.
new CommandHandler([
	new Hello()
]);

console.log(chalk.blueBright.bold("Loaded handlers/command.ts"));