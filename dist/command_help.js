// export function commandHelp(commands: Record<string, CLICommand>): void {
// 	console.log("Welcome to the Pokedex!\nUsage:\n\n");
// 	for (const [name, command] of Object.entries(commands)) {
// 		console.log(`${name}: ${command.description}`)
// 	}
// }
export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    for (const [name, command] of Object.entries(state.commands)) {
        console.log(`${name}: ${command.description}`);
    }
}
