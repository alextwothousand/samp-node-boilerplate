import { SampPlayer } from "samp-node-lib";

const commands: Map<string, Command> = new Map();

export interface ICommandSettings {
	aliases: string[];
}

export type ICommandArguments = string[];

export abstract class Command {
	constructor (public name: string, public settings: ICommandSettings) {}

	abstract exec(player: SampPlayer, args: ICommandArguments): void;
}

export class CommandHandler {
	constructor (cmds: Command[]) {
		cmds.forEach((cmd) => {
			commands.set(cmd.name, cmd);

			cmd.settings.aliases.forEach((alias) => {
				commands.set(alias, cmd);
			});
		});
	}
}

export const handlePlayerCmdText = (player: SampPlayer, cmdtext: string): void => {
	const cmd: string = cmdtext.split(" ")[0].replace("/", ""); // split array by " " delimiter. replace "/" with nothing.

	const args: ICommandArguments = cmdtext.split(" "); // split array by " " delimiter.
	args.shift(); // remove first idx from array
	
	const command = commands.get(cmd);
	if (command !== undefined) {
		// our command is valid. execute it.
		command.exec(player, args);
	}
};