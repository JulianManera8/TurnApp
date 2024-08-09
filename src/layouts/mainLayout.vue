<template>
    <div class="all-container">
        <div class>
            <NavbarComp />
        </div>
        <div class="main-container">
            <main >
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>

import NavbarComp from '../components/LayoutComponents/NavbarComp.vue'

</script>

<style lang="scss" scoped>

.all-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.main-container { 
    flex: 1;
}

</style>