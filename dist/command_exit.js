// export function commandExit(commands: Record<string, CLICommand>): void {
// 	console.log("Closing the Pokedex... Goodbye!");
// 	process.exit(0);
// }
export async function commandExit(state) {
    state.readline.close();
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}
