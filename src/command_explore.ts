import type { State } from "./state.js";

export async function commandExplore(state: State, locationName: string): Promise<void> {
  if (!locationName) {
    console.log('Usage: explore <location-area-name>');
    return;
  }
  
  try {
    const location = await state.pokeAPI.fetchLocation(locationName);
    
    console.log(`Exploring ${location.name}...`);
    
    const names = Array.from(
			new Set(location.pokemon_encounters.map((e) => e.pokemon.name))
		).sort();

		if (names.length === 0) {
			console.log("Found Pokemon:");
			console.log(" - none");
			return;
		}

		console.log("Found Pokemon:");
		console.log(" - " + names.join("\n - "));
  } catch (error) {
    console.log(`Could not explore "${locationName}". Are you sure it exists?`);
  }
}
