<template>
  <div class="content-contador" >
    <h1>Contador</h1> 
    <p>{{ contador }}</p>
    <button @click="incrementar" class="btn btn-mas">+ Incrementar + </button>
    <button @click="decrementar" class="btn btn-menos">- Decrementar -</button>
  </div>
</template>
   
   <script setup>
   import { ref } from 'vue';
   const contador = ref(0);
   const incrementar = () => {
     contador.value++;
   }
   
   const decrementar = () => {
     contador.value--;
     }
   </script>
   
<style scoped>
  p{
    font-size: 30px;
  }
  .btn{
    font-size: 15px;
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
  }
  .btn-mas{
    background-color: rgb(82, 206, 51);
  }
  .btn-menos{
    background-color: rgb(237, 11, 11);
  }
</style>
   