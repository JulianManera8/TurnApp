<template>

    <div class="container-general">

      <h3 class="title" style="display: flex; justify-content: center;">MI PERFIL</h3>

      <div class="container-foto-form">
        <!-- vista de la foto -->
        <section class="container-foto">
          <div class="container-avatar" >
            <div class="cont-avatar">
              <img class="avatar" :src="avatarSrc" />
            </div>
            <v-icon @click="elegirAvatar = !elegirAvatar" v-if="!elegirAvatar" class="icono-avatar" name="bi-pencil-fill" scale="2"/>
          </div>
        </section>
  
        <!-- FORM DE DATOS DE PERFIL -->
        <section v-if="!elegirAvatar" class="container-form">
          <form class="form">
            <div class="form-item">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" class="input" :value="dataPerfil.dataNombre" :readonly="!editar">
                <v-icon v-if="!editar" class="v-icon" name="bi-pencil-fill" scale="1.2" @click="editar = !editar"/>
                <v-icon v-if="editar" class="v-icon" name="bi-check-circle" scale="1.2" @click="editar = !editar"/>
            </div>

            <div class="form-item">
                <label for="apellido">Apellido</label>
                <input type="text" id="apellido" class="input" :value="dataPerfil.dataApellido" >
                <v-icon class="v-icon" name="bi-pencil-fill" scale="1.2"/>
            </div>
    
            <div class="form-item">
                <label for="Email">Email</label>
                <input type="text" id="Email" class="input" :value="dataPerfil.dataEmail">
                <v-icon class="v-icon" name="bi-pencil-fill" scale="1.2"/>
            </div>
    
            <div class="form-item">
                <label for="telefono">Teléfono</label>
                <input type="number" id="telefono" class="input" :value="dataPerfil.dataTelefono">
                <v-icon class="v-icon" name="bi-pencil-fill" scale="1.2"/>
            </div>
    
            <div class="form-item">
                <label for="contraseña">Contraseña</label>
                <input type="password" id="contraseña" class="input" :value="dataPerfil.dataPassword">
                <v-icon class="v-icon" name="bi-pencil-fill" scale="1.2"/>
            </div>
            
          </form>
        </section>

        <!-- elegir foto para cambiar -->
        <section v-if="elegirAvatar" class="container-form">

          <!-- boton de seleccionar foto -->

          <div class="messageBox">
            <div class="fileUploadWrapper">
              <label for="file">
                <span style="margin-right: 20px; color: white;"> Elegir foto </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                  <circle
                    stroke-width="20"
                    stroke="#6c6c6c"
                    fill="none"
                    r="158.5"
                    cy="168.5"
                    cx="168.5"
                  ></circle>
                  <path
                    stroke-linecap="round"
                    stroke-width="25"
                    stroke="#6c6c6c"
                    d="M167.759 79V259"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="25"
                    stroke="#6c6c6c"
                    d="M79 167.138H259"
                  ></path>
                </svg>
              </label>
              <input id="file" name="file" type="file" @change="cambiarAvatar"/>
            </div>
          </div>

          <ButtonGroup class="btn-container">
            <Button label="Cancelar" icon="pi pi-times" @click="cancelarCambio"/>
            <Button label="Guardar" icon="pi pi-check" @click="elegirAvatar = !elegirAvatar, guardado = true"/>
          </ButtonGroup>
          <span class="btn-volver" @click="elegirAvatar = !elegirAvatar">Volver</span>
        </section>
      </div>

    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';
import iconoUser from '@/assets/img/user.png';

var avatarSrc = ref(iconoUser);

const elegirAvatar = ref(false)
const  guardado = ref(false)
var avatarAntes = avatarSrc.value


const cambiarAvatar = (event) => {
  
  const file = event.target.files[0];
  
  if (!file) return;


  const reader = new FileReader();
  
  reader.onload = (e) => {
    avatarSrc.value = e.target.result;
  };
  
  reader.readAsDataURL(file);

  
};

const cancelarCambio = function (file) {
  if(file) {
    avatarSrc.value = iconoUser;
  }   
}

// completar campos con los datos de cada uno

let dataPerfil = ref({})

onMounted( async () => {

  const currentUser = await supabase.auth.getSession()
  
  let currentUserData = currentUser.data.session.user.user_metadata
  
  dataPerfil.value = {
    dataNombre: currentUserData.nombre,
    dataApellido: currentUserData.apellido,
    dataEmail: currentUserData.email,
    dataTelefono: currentUserData.telefono,
    dataPassword: currentUserData.password
  }

})




//editar campos
let editar = ref(false)

</script>

<style scoped>

  * {
    margin: auto;
    color: black;
  }

  .container-general {
    width: 60%;
    max-width: 950px;
    min-width: 600px;
    height: 460px;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px 30px;

    @media (width < 45px) {
      background-color: red;
    }
    
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
    font-size: 15px;
    .v-icon {
      margin: auto -15px;
    }
  }
  
  .input {
    border-radius: 20px;
    outline: 0 !important;
    box-sizing: border-box;
    padding: 12px 15px;
    width: 100% !important;
    height: 35px;
    font-size: 17px;
    background-color: rgb(210, 210, 210) !important;
  }

  .inputFile {
    display: flex;
    background-color: red;
  }

  label {
    display: flex;
    justify-content: center;
  }

  .input:focus {
    border: 2px solid teal;
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
    scale: 80%;
  }

  .input {
    background-color: grey;
  }

  .container-foto-form {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;

    .container-form {
      width: 60%;
    }
    
    .container-foto {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      margin: 30px 0 0 0;

      .container-btn {
        scale: 80%;
      }

      .container-avatar{
        position: relative;
        width: 200px;
        height: 200px;
        
        .cont-avatar {

          background-color: #00000034; 
          border-radius: 50%; 
          width: 165px;
          height: 165px;
          display: flex;

          img {
            object-fit: cover;
            border-radius: 50%;
          }

        }
        
        .avatar {
          width: 100%;
          height: 100%; 
          padding: 10px;
        }
        
        .icono-avatar {
          position: absolute;
          bottom: 25px;
          right: 15px;
          background-color: #34d399;
          border-radius: 50%;
          padding: 6px;
          cursor: pointer;
          transition: 0.2s;
          
          &:hover {
            background-color: #6ee7b7 !important;
            transition: 0.2s;
          }
          
        } 
        
      }

    }
    
  }

  .btn-volver {
    display: flex; 
    justify-content:
    center; 
    margin-top: 20px; 
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: rgb(0, 177, 97) !important;
    }
  }
  /* TODO LO DEL BOTON DE AGREGAR FOTO CON EL ICONO */
  .messageBox {
  width: fit-content;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d2d2d;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid rgb(63, 63, 63);
}
.messageBox:focus-within {
  border: 1px solid rgb(110, 110, 110);
}
.fileUploadWrapper {
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

#file {
  display: none;
}
.fileUploadWrapper label {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.fileUploadWrapper label svg {
  height: 50px;
}
.fileUploadWrapper label svg path {
  transition: all 0.3s;
}
.fileUploadWrapper label svg circle {
  transition: all 0.3s;
}
.fileUploadWrapper label:hover svg path {
  stroke: #fff;
}
.fileUploadWrapper label:hover svg circle {
  stroke: #fff;
  fill: #3c3c3c;
}
.fileUploadWrapper label:hover .tooltip {
  display: block;
  opacity: 1;
}


 


</style>