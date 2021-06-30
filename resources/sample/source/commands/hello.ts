import { SampPlayer } from "samp-node-lib";
import { Command, ICommandArguments } from "../systems/command";

class Hello extends Command {
	constructor() {
		super("hello", {
			aliases: ["world"]
		});
	}

	exec(player: SampPlayer, args: ICommandArguments): void {
		player.SendClientMessage("0xFFFFFFFF", "Hello world! (" + args.toString() + ")");
	}
}

export default Hello;