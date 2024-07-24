<template>
    <div>
        <mainLayout >
            <HomeComp />
        </mainLayout>
    </div>
</template>

<script setup>

import mainLayout from '../layouts/mainLayout.vue'
import HomeComp from '../components/HomeComp.vue'

</script>

<style lang="scss" scoped>

div {
    height: 100%;
}

</style>