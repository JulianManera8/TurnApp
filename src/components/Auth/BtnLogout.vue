<template>
    <div>
       <button @click.prevent="$emit('handleClick')"> LogOut </button>
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

</style>