<template>
    <div>
        <h1> VISTA DE HOME LOGEADO </h1>
<!--   
    aca mostramos:
    - COMPONENTE navbar
    - COMPONENTE lista de turnos de hoy
    - COMPONENTE calendario de este mes, con dias con turnos remarcados
    - COMPONENTE boton nuevo turno
    - COMPONENTE boton gestionar turnos
 -->
    <Button @click.prevent="seeUser"> user </Button>
    <Button @click.prevent="logOut"> chau </Button>
    </div>

</template>

<script setup>
import { supabase } from '@/supabase';

const seeUser = async () => {
    const {error, localUser} = await supabase.auth.getSession();

    if(error) {
        console.log(error)
    } else {
        console.log(localUser);
    }
}

const logOut = async () => {
    const {error} = await supabase.auth.logOut();

    if(error) {
        console.log(error)
    } else {
        console.log('logged out');
    }
}
</script>

<style scoped>
</style>