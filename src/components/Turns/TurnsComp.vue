<template>
    <div class="all-container">

        <div class="title-day-container">
            <h3> Turns for {{ today }}</h3>
        </div>

        <div class="turns-container">

            <div class="turns-content">
                <ul>
                    <li></li>
                </ul>
            </div>

            <div class="noTurns-container">
                <p> There are no turns for today! </p>
            </div>

        </div>

        <div class="btnAddTurn-container">
            <button>Add turn</button>
        </div>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

//mostrar la fecha de hoy
const today = ref('')
const setToday = () => {
    today.value = new Date().toLocaleDateString();
    // console.log(today.value);
}

//arr and functionality of show, create, delete, edit turns 
const turnsArray = ref([])

//aca tengo que obtener los turnos que tenga guardado en la base de datos
//y asignarlos al turnsArray

//verificar que si no hay nada en turnsArray, me muestre el mensaje de q no hay turnos


onMounted(() => {
    setToday();
})

</script>

<style lang="scss" scoped>

</style>