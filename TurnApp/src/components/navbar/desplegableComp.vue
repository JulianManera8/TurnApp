<template>
    <div>
        <!-- boton CERRAR DESPLEGABLE -->
        <ul>
            <!-- boton DARKMODE -->
            <!-- boton LENGUAJE -->
            <li><router-link to="/homeView">Inicio</router-link></li>
            <li><router-link to="/gestionTurnos/lista">Gestionar turnos</router-link></li>
            <li><router-link to="/configuracion">Configuracion</router-link></li>
            <li><router-link to="/tutorial">Tutorial</router-link></li>
            <li><button @click.prevent="cerrarSesion"> Log Out </button> </li>
        </ul>
    </div>
</template>

<script setup>
import { supabase } from '@/supabase';
import { useRouter } from 'vue-router';

let currentUser;
const router = useRouter();

const cerrarSesion = async () => {
    const {error} = await supabase.auth.signOut();

    (error) ? console.error(error) : console.log('sesion cerrada'), router.push('/')
}

</script>

<style lang="scss" scoped>

</style>