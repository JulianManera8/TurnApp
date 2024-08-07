<template>
    <div>
        <button class="button" @click.prevent="$emit('handleClick')"> Sign Out </button>
    </div>
</template>

<script setup>

import { ref } from 'vue';

//function to emit the event of log out
const handleClick = () => {
    emit('handleClick');
}

</script>

<style lang="scss" scoped>

//btn to log out
.button {
  position: relative;
  padding: 10px 10px 13px;
  font-weight: 700;
  height: 10px;
  font-size: 10px;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.button:hover {
  color: #cb0000bc;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

</style>