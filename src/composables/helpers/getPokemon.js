//peticion con axios

import axios from "axios";

const API_URL = 'https://pokeapi.co/api/v2/pokemon/ditto';

export const getPokemon = async () => {
    try {
        const respuesta = await axios.get(API_URL);
        const nuevoPokemon = respuesta.data.abilities[0].ability.name; // Accede a respuesta.data
        return nuevoPokemon;
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
        throw error; // Lanza el error para manejarlo fuera de la función
    }
};
