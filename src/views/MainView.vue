<template>
    <Header></Header>
    <div class="container">
        <sidebar/>
        <div class="content">
            <RouterView/>
        </div>
    </div>
    <div>
    </div>
</template>

<script setup>
//import Footer from '../components/Footer.vue';
import sidebar from '../components/SideBar.vue';
import Header from '../components/Header.vue'

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