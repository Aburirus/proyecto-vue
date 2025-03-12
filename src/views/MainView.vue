<template>
    <Header :mensaje="texto"></Header>
    <div class="container">
        <sidebar/>
        <div class="content">
            <input type="text" v-model="texto">
            {{ texto }}
            <RouterView/>
        </div>
    </div>

    <div>
    </div>
</template>

<script setup>
//import Footer from '../components/Footer.vue';
import sidebar from '../components/SideBar.vue';
import Header from '../components/Header.vue';
import {ref} from 'vue';

const texto = ref('');


</script>

<style scoped>
    .container {
        display: flex;
    }
    .content {
        flex: 1;
        padding: 20px;
        margin-top: 60px ;
    }
</style>