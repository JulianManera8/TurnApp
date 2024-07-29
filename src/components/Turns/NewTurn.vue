<template>
    <div>
        <div class="close-container">
            <v-icon @click="handleClickCloseCancel" name="io-close-circle-outline" scale="2" class="close-icon"></v-icon>
        </div>
        <h3 style="color: green;">New Turn form</h3>
        <form>
            <input type="text" placeholder="Name" v-model="nameTurn">
            <input type="text" placeholder="Lastname" v-model="lastnameTurn">
            <input type="number" placeholder="D.N.I" v-model="dniTurn">
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
const store = useUserStore()

const userId = store.user.id
console.log(user.id)


const nameTurn = ref(null) // string: julian
const lastnameTurn = ref(null) // string manera
const dniTurn = ref(null) // number 43428302
const dateTurn = ref(null) // date 2024-07-06
const timeTurn = ref(null) // time 12:54

const showError = ref(false);

const handleSave = () => {

    if(store.user == null) {
        return alert('activar popup de login')
    }

    if(nameTurn.value == null && lastnameTurn.value == null && dniTurn.value == null && dateTurn.value == null && timeTurn.value == null) {
        showError.value = true;

        setTimeout(() => {
            showError.value = false;
        }, 5000);

        return
    };

    insertTurn(nameTurn.value, lastnameTurn.value, dniTurn.value, dateTurn.value, timeTurn.value);

}



//cancel or close the popup
const emit = defineEmits(['closePopup'])
const handleClickCloseCancel = () => {
    emit('closePopup')
}


// function to insert a new turn in supabase database
const insertTurn = async (name, lastname, dni, time, date) => {


    try {
        const { data, error } = await supabase
            .from('turno')
            .insert({ 
                nombreTurno: name, 
                apellidoTurno: lastname,  
                fechaTurno: time, 
                horaTurno: date, 
                dniTurno: dni
            })
        ;

        if(error) throw error;
        
        nameTurn.value = null
        lastnameTurn.value = null
        timeTurn.value = null
        dateTurn.value = null
        dniTurn.value = null

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