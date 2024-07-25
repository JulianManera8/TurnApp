<template>

  <div style="margin-top: 10px;">
    
    <h1>Create an account</h1>

    <form>

      <div class="input-container">
        <input type="text" name="name" id="name" placeholder="Nombre" autocomplete="name" v-model="name" />
        <input type="text" name="lastname" id="lastname" placeholder="Apellido" autocomplete="additional-name" v-model="lastname"/>
        <input type="email" name="email" id="email" placeholder="Email" autocomplete="email" v-model="email"/>
        <input type="password" name="password" id="password" placeholder="Contraseña" autocomplete="current-password" v-model="password"  />
        <input type="password" name="repPassword" id="repPassword" placeholder="Confirma la contraseña" autocomplete="current-password" v-model="repPassword" />
      </div>  

      <div class="btn-container">
        <p v-if="error"> Debes completar todos los campos </p>
        <button type="submit" class="btn-signIn" @click.prevent="signUp">Create!</button>
      </div>

      <p style="margin-top: 20px;">Already have an account? <button class="linkSignIn" @click.prevent="$emit('changeForm')">Sign In!</button></p>

    </form>

  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { supabase } from '@/supabase.js'

const name = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const repPassword = ref('')

const error = ref(false)

const signUp = async () => {

  if(email.value && password.value && name.value && lastname.value && repPassword.value) {

    error.value = false

    if(repPassword.value === password.value) {

      const {error, data} = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
          data: {
            name: name.value,
            lastname: lastname.value
          }
        }
        });

        if(error) {
          alert(error.message)
        } else {
          window.location.href = '/home'
        };

    } else {
      alert('las contras no coinciden')
    };

  } else {
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {

      if(input.value === '') {
        error.value = true;

        setTimeout(() => {
          error.value = false
        }, 3000);

      }

    });

  };

}

//emit to change to form login

const changeForm = () => {
  emit('changeForm')
}


</script>

<style lang="scss" scoped>

  * {
    color: rgb(123, 123, 123);
    display: flex;
    flex-direction: column;
    margin: auto;
    box-sizing: content-box;
  }

  .all-container {
    margin-top: 10px;
  }
  
  h1 {
    color: rgb(177, 177, 177);
    display: flex;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    font-size: 40px;
  }  
  
  .input-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    max-width: 300px;
    min-width: 300px;
  
    input {
      padding: 13px !important;
      margin: 0;
      border-radius: 20px;
      background-color: rgb(227, 227, 227);
      border: none;
      color: black;
    }
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .btn-signIn {
    padding: 10px 15px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: teal;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 150px;
    margin: 20px 0;
    display: flex;
    align-items: center;
  
    &:hover {
      background-color: rgb(0, 184, 184);
    }
  }
  
  .linkSignIn {
    color: teal;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: rgb(0, 184, 184);
    }
  }
</style>