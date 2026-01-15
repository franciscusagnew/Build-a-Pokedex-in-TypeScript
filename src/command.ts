import type { CLICommand } from './state.js'
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from './command_explore.js';

// export type CLICommand = {
// 	name: string;
// 	description: string;
// 	callback: (commands: Record<string, CLICommand>) => void;
// };

export function getCommands(): Record<string, CLICommand> {
  return {
		exit: {
			name: "exit",
			description: "Exits the pokedex",
			callback: commandExit,
		},
		help: {
			name: "help",
			description: "Displays a help message",
			callback: commandHelp,
		},
		map: {
			name: "map",
			description: "Displays next Pokemon locations.",
			callback: commandMap,
		},
		mapb: {
			name: "mapb",
			description: "Displays previous Pokemon locations.",
			callback: commandMapB,
		},
		explore: {
			name: "explore",
			description: "Displays all Pokemon in the selected location.",
			callback: commandExplore,
		},
	};
}