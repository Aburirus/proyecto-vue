<template>
    <div class="sidebar">
        <div>
            <h2>Bienvenido</h2>
            <h3>Nombre: {{ nombre }}</h3>
            <h3>Email: {{ email }}</h3>
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
import { useReistrarStore } from '@/modules/registro/stores/RegistrarStore';
import { ref, watch } from 'vue';
const RegistrarStore = useReistrarStore();
const nombre =  ref(RegistrarStore.nombre.value);
const email = ref(RegistrarStore.email.value);
watch(() => RegistrarStore.nombre, (newValue) => {
    nombre.value = newValue;
}
); 
watch(() => RegistrarStore.email, (newValue) => {
   email.value = newValue;
})
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