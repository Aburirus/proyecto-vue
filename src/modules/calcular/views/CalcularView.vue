<template>
    <h3>Propiedades computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
   
    <ResultadoSection v-if="mostrarElemto" :resultado="valorCalculado"></ResultadoSection> 
        <!-- el v-show y el v-if pueden servir para casi lo mismo -->
         <div v-else-if="isNaN(valor)">De ser un numero para comprobar </div>
    <div v-else> 
        Aqui no se muestra nada
    </div>
    <!-- la directiva v-else se vincula directamente a la v-if que esta mas arriba pero nunca debe estar sola-->
</template>

<script setup>
import { computed, ref } from 'vue'; //las computadas nos sirven para ahorrar calculos y evitar que se sobre cargue la pagina al momenton de ejecutar
import ResultadoSection from '../componets/ResultadoSection.vue';

const valor = ref('');
const valorCalculado = computed(() => {
    return valor.value *3;
})

const mostrarElemto = computed(() => {
    return valor.value > 10; 
});

</script>

<style scoped></style>