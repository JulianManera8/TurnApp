<template>

    <div class="form-container">

      <h3 class="title">Crear Cuenta</h3>

      <form class="form" >
        <input type="text" class="input" placeholder="Nombre" autocomplete="name" v-model="nombre" required>
        <input type="text" class="input" placeholder="Apellido" autocomplete="additional-name" v-model="apellido" required>
        <input type="email" class="input" placeholder="Email" autocomplete="email" v-model="email" required>
        <input type="number" class="input" placeholder="Telefono" autocomplete="number" v-model="telefono" required>

        <div class="password">
          <v-icon v-if="!verContra" @click="cambiarType" class="password-icono" name="bi-eye-slash"> </v-icon>
          <v-icon v-else @click="cambiarType" class="password-icono" name="bi-eye"> </v-icon>

          <input :type="inputType" class="input" placeholder="Contraseña" autocomplete="new-password" v-model="password" required>
        </div>

        <div class="password">
          <input :type="inputType" class="input" placeholder="Repetir contraseña" autocomplete="new-password" v-model="repePassword" required>
        </div>

        
        <button class="form-btn" @click.prevent="crearCuenta" type="submit">Crear</button>

      </form>

      <div class="mostrarMsg" v-if="errorMsg">
        <p class="errormsg"> {{ errorMsg }}</p>
      </div>
      <div class="mostrarMsg" v-if="exitoMsg">
        <p class="exitomsg"> {{ exitoMsg }}</p>
      </div>

      <p class="sign-up-label">
        ¿Ya tienes cuenta?<span class="sign-up-link" @click="mostrarLogin">¡Inicia sesion!</span>
      </p>

    </div>

</template>

<script setup>

// IMPORTS
import { ref } from 'vue'
import { supabase } from '../../supabase'
import { useRouter } from 'vue-router';


// ENVIAR  INFO DESDE EL FORM A LA VISTA POR EMITS

const emit = defineEmits(['mostrarLogin'])

function mostrarLogin() {
  emit('mostrarLogin')
}


//FUNCIONALIDAD DEL FORM PARA REGISTRARSE

//       descripcion de variables

const router = useRouter()

let nombre = ref('')
let apellido = ref('')
let email = ref('')
let telefono = ref('')
let password = ref('')
let repePassword = ref('')

let errorMsg = ref('')
let exitoMsg = ref('')


//       funcion para conectar a supabase 
async function crearCuenta() {

  if(email.value, apellido.value, telefono.value, email.value, password.value, repePassword.value) {
    if(password.value === repePassword.value) {
      const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
        options: {
          data: {
            nombre: nombre.value,
            apellido: apellido.value,
            email: email.value,
            telefono: telefono.value,
            password: password.value
          }
        }
      })
    
      if(error) {
        errorMsg.value = 'Completa correctamente todos los campos'

        setTimeout(() => {
          return errorMsg.value = ''
        }, 2500);

      } else {
        console.log(data)
        exitoMsg.value = 'Registrado con exito, prueba de iniciar sesion.'
        setTimeout(() => {
          exitoMsg.value = '';
          mostrarLogin();
        }, 3000);

      };

    } else {
      errorMsg.value = 'Las contraseñas tienen que coincidir perro'
      setTimeout(() => {
        return errorMsg.value = ''
      }, 2500);
    };

  } else {
    errorMsg.value = 'Completa correctamente todos los campos'
    setTimeout(() => {
      return errorMsg.value = ''
    }, 2500);
  };

}


//MOSTRAR CONTRASEÑA
//   variables
let verContra = ref(false)
let inputType = ref('password')

//  funcion
const cambiarType = () => {
  verContra.value = (verContra.value === false) ? true : false
  inputType.value = (inputType.value === 'password') ? 'text' : 'password'
}

</script>






<style scoped>

* {
  margin: auto;
  background-color: transparent;
}

.form-container {
  width: 350px;
  border-radius: 20px;
  border-bottom-right-radius: 30%;
  box-sizing: border-box;
  padding: 20px 30px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.14);
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
}

.input {
  border-radius: 20px;
  border: 1px solid #c0c0c0;
  outline: 0 !important;
  box-sizing: border-box;
  padding: 12px 15px;
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
  font-size: 9px;
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
  scale: 150%;
  cursor: pointer;
}

.check-label {
  cursor: pointer;
  margin-right: 10px;
  font-size: 17px;
}

.mostrarMsg {
  display: flex;
  text-align: center;
 
  width: 100%;
  font-weight: bold;

  padding: 2px;
  font-size: small;
  margin-top: 20px; 
  .errormsg {
    border-top: 2px solid rgb(165, 0, 0);
    border-bottom: 2px solid rgb(156, 0, 0);
    color: rgba(182, 0, 0, 0.965);
  }
  .exitomsg {
    border-top: 2px solid rgb(11, 132, 0);
    border-bottom: 2px solid rgb(11, 132, 0);
    color: rgb(11, 132, 0);
  }
}

.password {
  position: relative;

  display: flex;
  text-align: center;
  justify-content: left;

  .password-icono {
    position: absolute;
    right: -30px;
    top: 42px;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    transition: 0.2s;
    scale: 115%;

    &:hover{
      background-color: rgba(128, 128, 128, 0.303);
    }
  }
}

</style>