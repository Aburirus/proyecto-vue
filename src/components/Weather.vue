<template>
    
    <h1>La temperatura actual de la zona es:  {{ weatherStore.temperatura }} °C</h1>
    
</template>

<script setup> 
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(() =>{
    useWeather();
});
</script>

<style escoped>

</style>