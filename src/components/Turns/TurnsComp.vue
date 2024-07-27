<template>
    <div class="all-container">

        <div class="title-day-container">
            <h3> Turns for {{ today }}</h3>
        </div>

        <section v-if="popupNewTurn">
            <NewTurn @closePopup="popupNewTurn = !popupNewTurn"/>
        </section>

        <div class="turns-container">

            <div class="turns-content">
                <ul>
                    <li></li>
                </ul>
            </div>

            <div class="noTurns-container">
                <p v-if="store.user == null"> Login to get access to your turns! </p>
                <p v-else> There are no turns for today! </p>
            </div>

        </div>

        <div v-if="!popupNewTurn" class="btnAddTurn-container">
            <button @click.prevent="handleClick">Add turn</button>
        </div>

    </div>
</template>

<script setup>
import NewTurn from '../Turns/NewTurn.vue'

import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useUserStore } from '../../stores/userStore.js'
const store = useUserStore();


//show todays date
const today = ref('')
const setToday = () => {
    today.value = new Date().toLocaleDateString();
}

//
const popupNewTurn = ref(false)

const handleClick = () => {
    if(store.user === null) {
        return console.log('TENES  Q LOG PERRO')
        //ACA TENGO Q ACTIVARLE EL POPUP PARA LOGEAR/REGISTRAR
    }

    popupNewTurn.value = !popupNewTurn.value;
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