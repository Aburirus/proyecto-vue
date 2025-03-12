<template>
    <div class="header">
        <h1>La temperatura actual de la zona es: <Tempe/> </h1>
    </div>
</template>

<script setup>
import Tempe from '../components/Weather.vue'
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: end;
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