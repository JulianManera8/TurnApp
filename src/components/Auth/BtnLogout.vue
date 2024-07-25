<template>
    <div>
       <button @click.prevent="$emit('handleClick')"> LogOut </button>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import {supabase} from '@/supabase.js'

const handleClick = () => {
    emit('handleClick');
}


</script>

<style lang="scss" scoped>

</style>