<template>
    <div class="header">
        {{ mensajeRecibido }}<Tempe/>
    </div>
    <!-- <div>pokemon <Poke/></div> -->
</template>

<script setup>
import Tempe from '../components/Weather.vue'
// import Poke from '../components/Pokemon.vue'
import { defineProps, ref, watch } from 'vue';

const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);
watch(() =>props.mensaje,(newValue)=>{
    mensajeRecibido.value = newValue;
} );
</script>

<style scoped>
    .header{
        display: flex;
        /* justify-content: center;  */
        align-items:   center;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: rgb(37, 35, 35);
        color: white;
    }
    h1{
        margin: 0;
        
    }
</style>