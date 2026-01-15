import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  try {
    const shallowLocations = await state.pokeAPI.fetchLocations(state.nextLocation);
    
    state.nextLocation = shallowLocations.next;
    state.prevLocation = shallowLocations.previous;
    
    for (const location of shallowLocations.results) {
      console.log(location.name)
    }
  } catch (error) {
    console.error(error);
  }
}

export async function commandMapB(state: State): Promise<void> {
  if (!state.prevLocation) {
    throw new Error("You're on the first page.");
  }
  
	try {
		const locations = await state.pokeAPI.fetchLocations(state.prevLocation);

		state.nextLocation = locations.next;
		state.prevLocation = locations.previous;

		for (const location of locations.results) {
			console.log(location.name);
		}
	} catch (error) {
		console.error(error);
	}
}
