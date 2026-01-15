import {stdin, stdout} from "node:process";
import { createInterface } from "node:readline";
import type { CLICommand } from "./command.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

export function getCommnds(): Record<string, CLICommand> {
  return {
		exit: {
			name: "exit",
			description: "Exit the pokedex",
			callback: commandExit,
		},
		help: {
			name: "help",
			description: "Displays a help message",
			callback: commandHelp,
		},
		// Add more commands here
	};
};

export function cleanInput(input: string): string[] {
  const words: string[] = input.toLowerCase().split(" ");
  return words
};

export function startREPL(): void {
  let commands = getCommnds();
  
  const readline = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex ❯ ",
  });
  
  readline.prompt();
  
  readline.on('line', (input: string) => {
    if (input.trim() === '') {
			return readline.prompt();
    }
    
    const words = cleanInput(input);
    
    for (let word in words) {
      // console.log(`You entered ${words[word]}`);
      if (words[word] in commands) {
        try {
          commands[words[word]].callback(commands);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log(`Unknown command`);
      }
    }
    
    // console.log(`Your command was: ${words[0]}`)
    readline.prompt();
 });
}