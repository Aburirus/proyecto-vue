<template>
    Habilidad de ditto: 
    {{ pokemonStore.nombre }}
</template>

<script setup>
import { usePokemon } from '@/composables/usePokemon';
import { onMounted } from 'vue';
import { usePokemonStore } from '@/stores/pokemonStore';

const pokemonStore = usePokemonStore();

onMounted(() =>{
    usePokemon();
});

</script>

<style scoped>
</style>