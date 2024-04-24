<template>

    <div class="form-container">

      <h3 class="title">Inicia sesión</h3>

      <form class="form">
        <input type="email" class="input" placeholder="Email" autocomplete="email" v-model="email">

        <input type="password" class="input" placeholder="Contraseña" autocomplete="current-password" v-model="password">
        
        <p class="page-link">
            <span class="page-link-label">Olvidaste tu contraseña?</span>
        </p>
        
        <button class="form-btn" @click.prevent="iniciarSesion">Entrar</button>
        
        <div>
          <label class="check-label" style="font-size: 12px;" for="checkbox">Mantener sesion iniciada</label>
          <input type="checkbox" id="checkbox" class="check">
        </div>
          
        <p class="sign-up-label">
          No tienes cuenta?<span style="font-size: small; text-decoration: none;" class="sign-up-link"  @click="mostrarFormRegistro" >Crea una!</span>
        </p>

      </form>

    
    </div>

</template>

<script setup>

import { ref } from 'vue';
import { supabase } from '@/supabase';

const emit  = defineEmits(['mostrarFormRegistro']);

const mostrarFormRegistro = () => {
  emit('mostrarFormRegistro')
}

let email = ref('')
let password = ref('')

async function iniciarSesion() {

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if(error) {
    console.log(error)
  } else {
    console.log(data)
  }

}


</script>

<style scoped>
    * {
        margin: auto;
        background-color: transparent;
    }
    .form-container {
      width: 350px;
      background-color: rgba(255, 255, 255, 0.942);
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.14);
      border-radius: 20px;
      border-bottom-right-radius: 30%;
      box-sizing: border-box;
      padding: 20px 30px;
      margin-top: 90px;
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
      border: 1px solid #c0c0c0;
      outline: 0 !important;
      box-sizing: border-box;
      padding: 12px 15px;
      height: 35px;
      font-size: 16px;
      width: 80%;
    }

    .input:focus {
      border: 3px solid teal;
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
      font-size: 3px;
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
        scale: 120%;
        cursor: pointer;
    }

    .check-label {
        cursor: pointer;
        margin-right: 10px;
        font-size: 17px;
    }





</style>