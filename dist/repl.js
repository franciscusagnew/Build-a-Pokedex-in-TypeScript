import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";
export function cleanInput(input) {
    const words = input.toLowerCase().split(" ");
    return words;
}
;
export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex ❯ ",
    });
    rl.prompt();
    rl.on('line', (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${words[0]}`);
        rl.prompt();
    });
}
// const consoleReader = new ConsoleReaderImpl();
// consoleReader.prompt("Pokedex >");
