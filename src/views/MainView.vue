<template>
    <div class="container">
        <sidebar/>
        <div class="content">
            <RouterView/>
        </div>
    </div>
</template>

<script setup>
import sidebar from '../components/SideBar.vue';
</script>

<style scoped>
    .container {
        display: flex;
    }
    .content {
        flex: 1;
        padding: 20px;
    }
</style>