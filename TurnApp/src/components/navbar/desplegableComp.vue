<template>
    <div>
        <v-icon class="icono-desplegar" scale="2" name="md-menu" @click="desplegar = !desplegar"/>
        <transition name="desplegable">            
            <div class="container-desplegable" v-if="desplegar">

                <!-- boton DARKMODE -->
                <!-- boton LENGUAJE -->
                <router-link to="/homeView" @click="desplegar = !desplegar" class="link" > Inicio </router-link>
                <router-link to="/gestionTurnos/lista" @click="desplegar = !desplegar" class="link" > Gestionar turnos </router-link>
                <router-link to="/configuracion" @click="desplegar = !desplegar" class="link" > Configuracion </router-link>
                <router-link to="/tutorial" @click="desplegar = !desplegar" class="link" > Tutorial</router-link>
                <button @click.prevent="cerrarSesion"> Log Out </button> 

            </div>
        </transition>
    </div>
</template>

<script setup>
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const cerrarSesion = async () => {
    const {error} = await supabase.auth.signOut();

    (error) ? console.error(error) : console.log('sesion cerrada'), router.push('/')
}

// funcionalidad de desplegar el menu

let desplegar = ref(false)

</script>




<style scoped>

.icono-desplegar {
    cursor: pointer;
    position: fixed;
    top: 15px;
    right: 27px;
    z-index: 1000;
}

.container-desplegable {
    position: absolute;
    top: 70px;
    right: 0px;
    display: flex;
    flex-direction: column;
    text-align: right;
    background-color: rgb(74, 195, 251);
    padding: 10px 30px 30px 30px;
    gap: 15px;
    
    .link {
        color: rgba(0, 0, 0, 0.711);
        text-decoration: none;
        transition: 0.3s;
        font-weight: 500;

        &:hover {
            color: black;
        }
    }

}







.desplegable-enter-from {
    position: absolute;
}
.desplegable-enter-active, .desplegable-leave-active {
    transition: all 0.3s ease;
}
.desplegable-enter-from, .desplegable-leave-to {
    opacity: 0;
}

</style>