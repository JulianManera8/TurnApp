<template>
  <div v-if="appReady" style="height: 100vh;">
    <!-- <Pruebas />  -->
    <RouterView />
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '../src/css/colors.css'

import Pruebas from './pruebas.vue'

import { supabase } from '@/supabase.js'
import { ref, onMounted } from 'vue'

import { useUserStore } from './stores/userStore.js'
const store = useUserStore();

const appReady = ref(null)

//check if there is any user loged in
const checkUser = async () => {
  const {data} =  await supabase.auth.getUser()

  console.log(data.user)
  if (!data.user) {
    appReady.value = true
  } else {
    store.setUser(data.user)
    appReady.value = true
  }

}

//if the user log in o log out or whatever change, this shoot
supabase.auth.onAuthStateChange((event, session) => {
  store.setUser(session ? session.user : null);
  appReady.value = true;
});


onMounted(() => {
  checkUser();
}) 


</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  transition: opacity 0.5s;
}

div {
  opacity: var(--opacity-fondo);
}


</style>
