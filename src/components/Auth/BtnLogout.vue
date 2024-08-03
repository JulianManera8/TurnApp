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
/* From Uiverse.io by Deri-Kurniawan */ 
.button {
  position: relative;
  padding: 12px 15px;
  height: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.button:hover {
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.button:active {
  transform: scale(0.9);
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #d10000, #ff0000ca);
  transition: all 0.4s ease-in-out;
  z-index: -1;
  border-radius: 50px;
}

.button:hover::before {
  left: 0;
}
</style>