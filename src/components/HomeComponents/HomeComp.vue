<template>
    <div class="all-container">
        
        <div class="turns-container">
            <TurnsComponent />
        </div>

    </div>
    <RouterView />
</template>

<script setup>
import TurnsComponent from '../Turns/TurnsComp.vue'

import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from '@/supabase'

//ir a la view de todos los turnos
const handleClick = () => {

}

</script>

<style lang="scss" scoped>

.all-container {
    margin-bottom: 150px;
}

</style>