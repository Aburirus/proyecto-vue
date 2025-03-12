//siempre que se cree un archivo para la carpeta composable se debe usar el 'use' en el nombre

import { usePokemonStore } from "@/stores/pokemonStore";
import { getPokemon } from "./helpers/getPokemon";

export const usePokemon = async () => {
    const nombre = await getPokemon();
    const pokemonStore = usePokemonStore();
    pokemonStore.nombre = nombre;
}