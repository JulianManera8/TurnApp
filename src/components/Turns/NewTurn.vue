<template>
    <div>
        <div class="close-container">
            <v-icon @click="handleClickCloseCancel" name="io-close-circle-outline" scale="2" class="close-icon"></v-icon>
        </div>
        <h3 style="color: green;">New Turn form</h3>
        <form>
            <input type="text" placeholder="Name" v-model="nameTurn">
            <input type="text" placeholder="Lastname" v-model="lastnameTurn">
            <input type="date" placeholder="Date" v-model="dateTurn">
            <input type="time" placeholder="Hour" v-model="timeTurn">
        </form>

        <p v-if="showError"> You must complete all the info! </p>

        <div>
            <button @click.prevent="handleSave"> Save </button> 
            <button @click.prevent="handleClickCloseCancel"> Cancel </button> 
        </div>
    </div>
</template>

<script setup>

import { supabase } from '@/supabase.js'
import { ref, onMounted } from 'vue'

import { useUserStore } from '../../stores/userStore.js'
const storeUser = useUserStore()

import { useTurnsStore } from '../../stores/turnsStore.js'
const storeTurns = useTurnsStore()


const userId = storeUser.user.id

const nameTurn = ref(null) // string: julian
const lastnameTurn = ref(null) // string manera
const dateTurn = ref(null) // date 2024-07-06
const timeTurn = ref(null) // time 12:54

const showError = ref(false);

//handle the click on save button, verifying that the user is logged in and has completed all the data
const handleSave = () => {

    if(storeUser.user == null) {
        return alert('activar popup de login')
    }

    if(userId == null || nameTurn.value == null || lastnameTurn.value == null || dateTurn.value == null || timeTurn.value == null) {
        showError.value = true;

        setTimeout(() => {
            showError.value = false;
        }, 5000);

        return
    };

    insertTurn(userId ,nameTurn.value, lastnameTurn.value, dateTurn.value, timeTurn.value);

}

//emit of cancel or close the popup
const emit = defineEmits(['closePopup'])

const handleClickCloseCancel = () => {
    emit('closePopup')
}

// function to insert a new turn in supabase database
const insertTurn = async (userId, name, lastname, date, time, ) => {

    try {
        const { data, error } = await supabase
            .from('turno')
            .insert({ 
                nombreTurno: name, 
                apellidoTurno: lastname,  
                fechaTurno: date, 
                horaTurno: time, 
                user_id: userId
            })
            .select()
        ;

        if(error) throw error;
        
        nameTurn.value = null
        lastnameTurn.value = null
        timeTurn.value = null
        dateTurn.value = null

        // storeTurns.addTurn(data[0])

        emit('closePopup')

    } catch (error) {
        console.log(error)
    };
}


</script>

<style lang="scss" scoped>




.close-container {
    // position: absolute;
    right: 10px;
    top: 10px;

    .close-icon {
        opacity: .5;
        transition: all 0.20s;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

}
</style>