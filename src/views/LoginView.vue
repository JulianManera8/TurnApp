<template>
    <div>
        <mainLayout >
            <LoginHome />
        </mainLayout>
    </div>
</template>

<script setup>

import mainLayout from '../layouts/mainLayout.vue'
import LoginHome from '@/components/Auth/LoginHome.vue';

</script>

<style lang="scss" scoped>

div {
    height: 100%;
}

</style>