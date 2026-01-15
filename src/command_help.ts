import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
	console.log("Welcome to the Pokedex!\nUsage:\n\n");
	for (const [name, command] of Object.entries(commands)) {
		console.log(`${name}: ${command.description}`)
	}
}
