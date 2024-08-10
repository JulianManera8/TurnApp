<template>
    <div>
        <form @submit="handleSave" class="editTurns-item">
            <input type="text" placeholder="Name" v-model="nameTurn">
            <input type="text" placeholder="Lastname" v-model="lastnameTurn">
            <input type="date" placeholder="dd/mm/yyyy" v-model="dateTurn">
            <input type="time" placeholder="hh-mm" v-model="timeTurn">

            <div class="btn-container">
                <button class="saveEditBtn" @click.prevent="handleSave"> Save </button> 
                <button class="cancelEditBtn" @click.prevent="handleClickCloseCancel"> Cancel </button> 
            </div>
        </form>

        <p v-if="showError" class="errorMsg"> You must complete all the info! </p>

        
    </div>
</template>

<script setup>

import { supabase } from '@/supabase.js'
import { ref, onMounted, nextTick } from 'vue'

import { useUserStore } from '../../stores/userStore.js'
const storeUser = useUserStore()

import { useRouter } from 'vue-router'
const router = useRouter()

let today = new Date().toISOString().split('T')[0];
console.log(today)

const userId = storeUser.user.id

const nameTurn = ref(null)
const lastnameTurn = ref(null)
const dateTurn = ref(today) 
console.log(dateTurn.value)
const timeTurn = ref('12:00')

const showError = ref(false);

//handle the click on save button, verifying that the user is logged in and has completed all the data
const handleSave = () => {

    if(storeUser.user == null) {
        router.push('/login')
    }

    if(userId == null || nameTurn.value == null || lastnameTurn.value == null || dateTurn.value == null || timeTurn.value == null) {
        showError.value = true;

        setTimeout(() => {
            showError.value = false;
        }, 3000);

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

        emit('closePopup')

    } catch (error) {
        console.log(error)
    };
}

onMounted( () => {
    // setToday();
})


</script>

<style lang="scss" scoped>

.editTurns-item {
    margin:10px 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    

    input {
        border: 1px solid grey;
        padding: 5px 10px;
        border-radius: 2rem;   
        font-size: medium;

        width: 40%;
    }

    .btn-container{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 30px;
        margin-top: 20px;
    }
}

.errorMsg {
    color: red;
}

.saveEditBtn {
    color: #2ba100;
    padding: 0.5em .7em;
    font-size: 17px;
    border-radius: 2em;
    background: rgba(238, 238, 238, 0.582);
    cursor: pointer;
    border: 2px solid #32970045;
    transition: all 0.3s;
    box-shadow: 4px 4px 8px #c5c5c5, -2px -2px 8px #ffffff;

    &:hover {
        box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    }

}        
        
.cancelEditBtn {
    color: #ff0000;
    padding: 0.5em .7em;
    font-size: 17px;
    border-radius: 2em;
    background: rgba(238, 238, 238, 0.582);
    cursor: pointer;
    border: 2px solid #ff000045;
    transition: all 0.3s;
    box-shadow: 4px 4px 8px #c5c5c5, -2px -2px 8px #ffffff;

    &:hover {
        box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    }
}

</style>