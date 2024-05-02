<template>

    <div class="form-container">

      <h3 class="title">Nuevo turno</h3>

      <form class="form">
        <div class="form-item">
            <label for="nombreApellido">Nombre y Apellido</label>
            <input type="text" id="nombreApellido" class="input">
        </div>

        <div class="form-item">
            <label for="dni">D.N.I.</label>
            <input type="number" id="dni" class="input">
        </div>

        <div class="form-item">
            <label for="Email">Email</label>
            <input type="text" id="Email" class="input">
        </div>

        <div class="form-item">
            <label for="obraSocial">Obra social</label>
            <input type="text" id="obraSocial" class="input">
        </div>

        <div class="form-item">
            <label for="fecha">Fecha</label>
            <input type="date" id="fecha" class="input">
        </div>

        <div class="form-item">
            <label for="hora">Hora</label>
            <input type="date" id="hora" class="input">
        </div>
        

        <div class="form-item">
            <label for="observaciones">Observaciones</label>
            <Textarea  autoResize class="input" rows="3" cols="15" />
        </div>

        <ButtonGroup class="btn-container">
            <Button label="Cancelar" icon="pi pi-times" />
            <Button label="Agregar" icon="pi pi-check" />
        </ButtonGroup>
        

      </form>

    </div>

</template>

<script setup>

import { ref } from 'vue';
import { supabase } from '@/supabase';


let nombreApellido= ref('')
let dni = ref('')
let email = ref('')
let obraSocial = ref('')
let fecha = ref('')
let hora = ref('')
let observaciones = ref('')

//funcion para mandar datos a supabase
const createTurn = async () => {
  
}



</script>

<style scoped>
    * {
        margin: auto;
        color: black;
    }
    .form-container {
      width: 550px;
      background-color: #fff;
      border: 1px solid black;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 20px 30px;
      
    }

    .title {
      text-align: center;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      margin: 10px 0 30px 0;
      font-size: 28px;
      font-weight: 800;
    }

    .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-bottom: 15px;
    }

    .input {
      border-radius: 20px;
      outline: 0 !important;
      box-sizing: border-box;
      padding: 12px 15px;
      width: 100% !important;
    }

    .input:focus {
        border: 2px solid teal;
    }

    .page-link {
      text-decoration: underline;
      margin: 0;
      text-align: end;
      color: #747474;
      text-decoration-color: #747474;
    }

    .page-link-label {
      cursor: pointer;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      font-size: 9px;
      font-weight: 700;
    }

    .page-link-label:hover {
      color: #000;
    }

    .form-btn {
      padding: 10px 15px;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      border-radius: 20px;
      border: 0 !important;
      outline: 0 !important;
      background: teal;
      color: white;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      width: 150px;
      margin-top: 20px;
    }

    .form-btn:active {
      box-shadow: none;
    }

    .sign-up-label {
      margin: 30px 0;
      font-size: 10px;
      color: #747474;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    .sign-up-link {
      margin-left: 10px;
      font-size: 11px;
      text-decoration: underline;
      text-decoration-color: teal;
      color: teal;
      cursor: pointer;
      font-weight: 800;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    .check {
        scale: 150%;
        cursor: pointer;
    }

    .check-label {
        cursor: pointer;
        margin-right: 10px;
        font-size: 17px;
    }


    .form-item {
        display: flex;
        width: 100%;
        gap: 20px;
        label {
            width: 50%;
            display: flex;
            text-align: left;
        }
    }

    .btn-container {
        display: flex;
        margin-top: 30px;
        gap: 30px;
    }

    .input {
        background-color: grey;

    }


</style>