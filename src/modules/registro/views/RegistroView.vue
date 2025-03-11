<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
            <div class="form">
               <label for="nombre">Nombre:</label>
                <Field  v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese nombre"/> 
                <ErrorMessage name="nombre"></ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email:</label>
                <Field v-model="email" type="text" name="email" id="email" placeholder="ingrese email"/>
                <ErrorMessage name="email"></ErrorMessage>
            </div>
            <div class="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useReistrarStore } from '../stores/RegistrarStore';
import { ref } from 'vue';
const RegistrarStore = useReistrarStore();

const nombre = ref('');
const email = ref(''); 

const onSubmit = () => {
    RegistrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Se ha enviado el formulario');
}
 

</script>

<style scoped>
    .form {
        margin-bottom: 10px;
    }
</style>