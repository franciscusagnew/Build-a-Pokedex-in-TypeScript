export function commandHelp(commands) {
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    for (const [name, command] of Object.entries(commands)) {
        console.log(`${name}: ${command.description}`);
    }
}
