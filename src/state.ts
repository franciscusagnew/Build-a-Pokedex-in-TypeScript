import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { PokeAPI } from "./pokeapi.js";
import { getCommands } from "./command.js";

export type CLICommand = {
	name: string;
	description: string;
	// callback: (commands: Record<string, CLICommand>) => void;
  // callback: (state: State) => void;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocation: string;
  prevLocation: string;
  collectedPokemon: Record<string, any>;
};

export function initState(cacheInterval: number) {
  const readline = createInterface({
		input: stdin,
		output: stdout,
		prompt: "Pokedex ❯ ",
  });
  
  return {
    readline: readline,
    commands: getCommands(),
    pokeAPI: new PokeAPI(cacheInterval),
    prevLocation: "",
    nextLocation: "",
    collectedPokemon: {}
  };
}
