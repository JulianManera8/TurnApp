<template>

    <div class="form-container">

      <h3 class="title">Inicia sesión</h3>

      <form class="form">
        <input type="email" class="input" placeholder="Email" autocomplete="email" v-model="email">

        <div class="password">
          <v-icon v-if="!verContra" @click="cambiarType" class="password-icono" name="bi-eye-slash"> </v-icon>
          <v-icon v-else @click="cambiarType" class="password-icono" name="bi-eye"> </v-icon>

          <input :type="inputType" id="password" class="input" placeholder="Contraseña" autocomplete="current-password" v-model="password">
        </div>
        
        <p class="page-link">
            <span class="page-link-label">Olvidaste tu contraseña?</span>
        </p>
        
        <button class="form-btn" @click.prevent="iniciarSesion">Entrar</button>
        
        <div>
          <label class="check-label" style="font-size: 12px;" for="checkbox">Mantener sesion iniciada</label>
          <input type="checkbox" id="checkbox" class="check">
        </div>

        <div class="mostrarError" v-if="errormsg">
          <p class="errormsg"> {{ errormsg }}</p>
        </div>
          
        <p class="sign-up-label">
          No tienes cuenta?<span style="font-size: small; text-decoration: none;" class="sign-up-link"  @click="mostrarFormRegistro" >Crea una!</span>
        </p>

      </form>

    
    </div>

</template>

<script setup>

// IMPORTS
import { ref } from 'vue';
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

// ENVIAR  INFO DESDE EL FORM A LA VISTA POR EMITS

const emit  = defineEmits(['mostrarFormRegistro']);

const mostrarFormRegistro = () => {
  emit('mostrarFormRegistro')
}

//FUNCIONALIDAD DEL FORM PARA INICIAR SESION

//       descripcion de variables

const router = useRouter()

let email = ref('')
let password = ref('')
let errormsg = ref('')


//       funcion para conectar a supabase 

async function iniciarSesion() {

  if(email.value, password.value) {

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
  
    if(error) {
      errormsg.value = 'Email o contraseña incorrecto, vuelve a intentarlo.'

      setTimeout(() => {
        return errormsg.value = ''
      }, 2500);

    } else {
      console.log(data)
        router.push({name: 'homeview'}) 
      }

  } else {
    errormsg.value = 'Completa el email y contraseña para iniciar sesion.'
    setTimeout(() => {
      return errormsg.value = ''
    }, 2500);
  }

}

async function seeCurrentUser() {
  const currentUser = await supabase.auth.getSession()
}

// VER CONTRASEÑA
//variables
let verContra = ref(false)
let inputType = ref('password')

//funcion para msotrar contra
const cambiarType = () => {
  verContra.value = (verContra.value === false) ? true : false;
  inputType.value = (inputType.value === 'password') ? 'text' : 'password';
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 3px;
  font-weight: 700;
}

.page-link-label:hover {
  color: #000;
}

.form-btn {
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
  margin-top: 20px;
}

.form-btn:active {
  box-shadow: none;
}

.sign-up-label {
  margin: 30px 0;
  font-size: 10px;
  color: #747474;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.sign-up-link {
  margin-left: 10px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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

.mostrarError {
  display: flex;
  text-align: center;
  color: red;
  width: 100%;
  font-weight: bold;
  border-top: 2px solid red;
  border-bottom: 2px solid red;
  padding: 2px;
  font-size: small;
}

.password {
  position: relative;

  display: flex;
  text-align: center;
  justify-content: left;

  .password-icono {
    position: absolute;
    right: -35px;
    top: 4px;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    transition: 0.2s;
    
    &:hover{
      background-color: rgba(128, 128, 128, 0.303);
    }
  }
}



</style>