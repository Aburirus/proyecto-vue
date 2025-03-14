<template>
    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
   
    <ResultadoSection :resultado="valorCalculado"></ResultadoSection>
</template>

<script setup>
import { computed, ref } from 'vue'; //las computadas nos sirven para ahorrar calculos y evitar que se sobre cargue la pagina al momenton de ejecutar
import ResultadoSection from '../componets/ResultadoSection.vue';

const valor = ref('');
const valorCalculado = computed(() => {
    return valor.value *3;
})

</script>

<style scoped></style>