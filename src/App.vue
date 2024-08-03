<template>
  <div v-if="appReady" style="height: 100vh;">
    <!-- <Pruebas />  -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import '../src/css/colors.css'

import Pruebas from './pruebas.vue'

import { supabase } from '@/supabase.js'
import { ref, onMounted } from 'vue'

import { useUserStore } from './stores/userStore.js'
const storeUser = useUserStore();


import { useTurnsStore } from './stores/turnsStore.js'
const storeTurns = useTurnsStore()


const appReady = ref(false)

//check if there is any user loged in
const checkUser = async () => {

  try {
    const { error, data } = await supabase.auth.getUser()

    if (error) throw error

    if (data.user) {
      storeUser.setUser(data.user)
      appReady.value = true
    } else {
      storeUser.setUser(null)
      appReady.value = true
    }

    // Marcar la aplicación como lista una vez que se ha verificado el usuario y cargado los turnos si es necesario
    

  } catch (error) {
    console.log(error.message)
  }
}

//if the user log in o log out or whatever change, this shoot
supabase.auth.onAuthStateChange((event, session) => {
  storeUser.setUser(session ? session.user : null);
  appReady.value = true
});


onMounted(() => {
  checkUser();
})


</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  transition: opacity 0.5s;
  font-family: "Ubuntu", sans-serif;
}

div {
  opacity: var(--opacity-fondo);
}
</style>
