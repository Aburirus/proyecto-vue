<template>
    <div class="sidebar">
        <div>
            <h2>Barra Lateral</h2>
            <ul>
                <li>
                    <router-link to="/contador">Contador</router-link>
                </li>
                <li>
                    <router-link to="/lista">Lista de Tareas</router-link>
                </li>
                <li>
                    <router-link to="/registro">Registro</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
</script>
<style escope>
    .sidebar {
        width: 200px;
        background-color: rgb(141, 135, 147);
        padding: 20px;
    }
    ul {
        list-style-type: none;
        padding: 10px;
    }
    
</style>