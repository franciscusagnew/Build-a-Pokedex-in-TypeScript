// import type { CLICommand } from "./command.js";
import type { State } from "./state.js";

// export function commandExit(commands: Record<string, CLICommand>): void {
// 	console.log("Closing the Pokedex... Goodbye!");
// 	process.exit(0);
// }

export async function commandExit(state: State): Promise<void> {
	state.readline.close();
	console.log("Closing the Pokedex... Goodbye!");
	process.exit(0);
}
