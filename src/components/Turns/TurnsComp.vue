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

                <ol v-if="store.user != null">
                    <li v-for="turn in turnsArray" :key="turn.id">
                        <p> 
                            {{ turn.nombreTurno }}, {{ turn.apellidoTurno }}, {{ turn.horaTurno }}, {{ turn.dniTurno }} 
                            <v-icon name="io-close-circle-outline" scale="1.5" @click="removeTurn(turn.id)"/>
                        </p> 
                    </li>
                </ol>

                <p v-if="store.user == null"> Login to get access to your turns! </p>
                <p v-if="turnsArray.length == 0 && store.user != null && !popupNewTurn"> There are no turns for today! </p>
            </div>

        </div>

        <div v-if="!popupNewTurn" class="btnAddTurn-container">
            <button @click.prevent="handleClick">Add turn</button>
        </div>

    </div>
</template>

<script setup>
import NewTurn from '../Turns/NewTurn.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '@/supabase.js'
import { useUserStore } from '../../stores/userStore.js'
const store = useUserStore();

//show todays date
const today = ref('')
const setToday = () => {
    today.value = new Date().toLocaleDateString();
}

//functionality to select and show turns of the day
const turnsArray = ref([])

const showTurns = async () => {
    
    if(store.user === null ) {
        return
    }

    try {
        const {data, error} = await supabase
            .from('turno')
            .select('*')
            .eq('user_id', store.user.id)
        ;

        if(error) throw error

        for(let turn of data) {
            turnsArray.value.push(turn)
        }

    } catch (error) {
        console.log(error.message)
    }
}

//show the form to insert a new turn
const popupNewTurn = ref(false)

const handleClick = () => {
    if(store.user === null) {
        return console.log('TENES  Q LOG PERRO')
        //ACA TENGO Q ACTIVARLE EL POPUP PARA LOGEAR/REGISTRAR
    }

    popupNewTurn.value = !popupNewTurn.value;
}

//function to delete a turn and refresh the turnsarray 
const removeTurn = async (idDeleted) => {

    try {
        const {error} = await supabase
            .from('turno')
            .delete()
            .eq('id', idDeleted)
        
        if(error) throw error

        turnsArray.value = turnsArray.value.filter( turn => {
            return turn.id !== idDeleted
        })

    } catch (error) {
        console.log(error.message)
    }

}

//function to refresh turns when a new one is created
const channelInsert = async () => {
    
    try {
        const {error} = supabase
        .channel('new-turn-channel')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'turno',
          },
          (payload) => {
            console.log(payload)
            // Agregar el nuevo turno a la lista
            turnsArray.value.push(payload.new)
          }
        )
        .subscribe()

        if(error) throw error
    } catch (error) {
        console.log(error.message)
    }

}


onMounted(() => {
    setToday(); // get todays date
    showTurns(); // show existent turns from the database
    channelInsert(); // start the suscription of the channel to update my arr of turns when i make an insert of a new turn

    onUnmounted(() => { // delete the suscription when the component is unmounted.
        supabase.removeChannel(newTurnChannel)
    })
})

</script>

<style lang="scss" scoped>

</style>