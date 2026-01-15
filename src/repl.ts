// export function getCommnds(): Record<string, CLICommand> {
//   return {
// 		exit: {
// 			name: "exit",
// 			description: "Exit the pokedex",
// 			callback: commandExit,
// 		},
// 		help: {
// 			name: "help",
// 			description: "Displays a help message",
// 			callback: commandHelp,
// 		},
// 		// Add more commands here
// 	};
// };

import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  // const words: string[] = input.toLowerCase().split(" ");
  // return words
  return input.toLowerCase().trim().split(/\s+/).filter(((word) => word !== ""))
};

export async function startREPL(state: State): Promise<void> {
  state.readline.prompt();
  
  state.readline.on('line', async (input: string) => {    
    const words = cleanInput(input);
    if (words.length === 0) {
			state.readline.prompt();
			return;
    }
    
    const commandName = words[0]
    const args = words.slice(1)
    
    const cmd = state.commands[commandName];
    
    if (!cmd) {
      console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`);
      state.readline.prompt();
      return;
    }
    
    // for (let word in words) {
    //   // console.log(`You entered ${words[word]}`);
    //   if (words[word] in state.commands) {
    //     try {
    //       state.commands[words[word]].callback(state);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   } else {
    //     console.log(`Unknown command: "${word}". Type "help" for a list of commands.`);
    //   }
    // }
    try {
      await cmd.callback(state, ...args);
    } catch (error) {
      console.error(error);
    }
    
    // console.log(`Your command was: ${words[0]}`)
    state.readline.prompt();
 });
}