import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore('pokemon',  ()  => {
    const nombre = ref(0);
    const setNombre = (pok) => {
        nombre.value = pok;
    }
    return {nombre, setNombre}
});