<template>
    <div class="sidebar">
        <div>
            <h2 class="title">Bienvenido</h2>
            <h3>Nombre: {{ RegistrarStore.nombre }}</h3>
            <h3>Email: {{ RegistrarStore.email }}</h3>
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
                <li>
                    <router-link to="/pokemon">Pokemon</router-link>
                </li>
                <li>
                    <router-link to="/calcular">Calcular</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useReistrarStore } from '@/modules/registro/stores/RegistrarStore';
import { ref, watch } from 'vue';
const RegistrarStore = useReistrarStore();
//const nombre =  ref(RegistrarStore.nombre.value);
//const email = ref(RegistrarStore.email.value);
/*watch(() => RegistrarStore.nombre, (newValue) => { //el watch escucha los cambios hechos en la store 
    nombre.value = newValue;
}
); */
/*watch(() => RegistrarStore.email, (newValue) => {
   email.value = newValue;
})*/
</script>

<style escope>
    .sidebar {
        width: 200px;
        background-color: rgb(141, 135, 147);
        padding: 20px;
        margin-top: 75px;
    }

    ul {
        list-style-type: none;
        padding: 10px;
    }
    .title{
        font-size: 30px;
    }
</style>