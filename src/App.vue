<template>
  <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { supabase } from './supabase.js'


const getAuth = async () => {
  const {data, error} = await supabase.auth.getUser()
  try {
    console.log(data.user)
  } catch (error) {
    console.log(error)
  }
}

onMounted( () => {
  getAuth()
})


</script>



<style scoped>

</style>
