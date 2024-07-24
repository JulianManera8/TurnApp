<template>
    <div>
        <button @click.prevent="cambiar"> Darkmode </button>
    </div>
</template>

<script setup>

import '../../css/colors.css'

const cambiar = () => {
    document.body.classList.toggle("darkMode");
}

</script>

<style lang="scss" scoped>

button {
    background-color: var(--color-fondo);
}

</style>