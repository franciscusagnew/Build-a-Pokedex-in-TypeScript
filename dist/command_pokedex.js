export async function commandPokedex(state) {
    console.log("Your Pokedex:");
    for (const pokemon of Object.values(state.collectedPokemon)) {
        console.log(` - ${pokemon.name}`);
    }
}
