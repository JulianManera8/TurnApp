<template>
    <div class="all-container">
        
        <div class="turns-container">
            <TurnsComponent />
        </div>

        <div class="calendar-container">
            <CalendarComp />
        </div>

        <div class="btn-container">
            <button> <RouterLink to="/turns"> Gestionar turnos </RouterLink> </button>
        </div>

    </div>
    <RouterView />
</template>

<script setup>
import TurnsComponent from '../Turns/TurnsComp.vue'
import CalendarComp from '../Turns/CalendarComp.vue'

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