import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapB } from "./command_map.js";
import { commandExplore } from './command_explore.js';
import { commandCatch } from './command_catch.js';
import { commandInspect } from './command_inspect.js';
import { commandPokedex } from './command_pokedex.js';
// export type CLICommand = {
// 	name: string;
// 	description: string;
// 	callback: (commands: Record<string, CLICommand>) => void;
// };
export function getCommands() {
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
            name: "explore <location-name>",
            description: "Displays all Pokemon in the selected location.",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon-name",
            description: "Catch a Pokemon.",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon-name>",
            description: "View details about a Pokemon you have caught.",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "View all Pokemon you have caught.",
            callback: commandPokedex,
        },
    };
}
