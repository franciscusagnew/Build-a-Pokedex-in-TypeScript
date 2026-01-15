import { createInterface } from "readline";
import { stdin, stdout } from "node:process";
import { PokeAPI } from "./pokeapi.js";
import { getCommands } from "./command.js";
export function initState(cacheInterval) {
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
