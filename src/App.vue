<template>
  <div style="height: 100vh;">
    <RouterView />
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import '../src/css/colors.css'

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
