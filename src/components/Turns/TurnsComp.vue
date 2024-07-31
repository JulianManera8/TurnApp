<template>
    <div class="all-container">

        <div class="title-day-container">
            <h3> All your Turns</h3>
        </div>

        <section v-if="popupNewTurn">
            <NewTurn @closePopup="popupNewTurn = !popupNewTurn" />
        </section>

        <div class="turns-container">

            <div class="noTurns-container">

                <ol v-if="store.user != null">
                    <li v-for="turn in turnsArray" :key="turn.id">

                        <div v-if="editTurnId !== turn.id" style="display: flex; gap: 5px;">
                            <p> {{ turn.nombreTurno }} </p>
                            <p> {{ turn.apellidoTurno }}, </p>
                            <p> {{ turn.fechaTurno }}, </p>
                            <p> {{ turn.horaTurno }}, </p>
                            <p> {{ turn.dniTurno }} </p>
                            <v-icon name="io-close-circle-outline" scale="1.5" @click="removeTurn(turn.id)" />
                            <v-icon name="bi-pencil-fill" scale="1.5" @click="editTurn(turn.id)" />
                        </div>

                        <div v-else style="display: flex; gap: 5px; flex-wrap: wrap;">
                            <input type="text" :placeholder="turn.nombreTurno" v-model="nombreTurno">
                            <input type="text" :placeholder="turn.apellidoTurno.toUpperCase()" v-model="apellidoTurno">
                            <input type="date" :placeholder="turn.fechaTurno" v-model="fechaTurno">
                            <input type="time" :placeholder="turn.horaTurno" v-model="horaTurno">
                            <input type="number" :placeholder="turn.dniTurno" v-model="dniTurno">

                            <button @click.prevent="saveEdit(turn.id)"> Save </button>
                            <button @click.prevent="handleCancel"> Cancel </button>
                        </div>

                    </li>
                </ol>

                <p v-if="store.user == null"> Login to get access to your turns! </p>
                <p v-if="turnsArray.length == 0 && store.user != null && !popupNewTurn"> There are no turns for today!
                </p>
            </div>

        </div>

        <div v-if="!popupNewTurn && !editTurnId" class="btnAddTurn-container">
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

//function to update turns
const editTurnId = ref(null);

const nombreTurno = ref(null);
const apellidoTurno = ref(null);
const dniTurno = ref(null);
const fechaTurno = ref(null);
const horaTurno = ref(null);

const editTurn = (id) => {
    editTurnId.value = id
}

const saveEdit = async () => {

    try {
        
        const {error} = await supabase
            .from('turno')
            .update({
                nombreTurno: nombreTurno.value, 
                apellidoTurno: apellidoTurno.value,  
                fechaTurno: fechaTurno.value, 
                horaTurno: horaTurno.value, 
                dniTurno: dniTurno.value,
            })
            .eq('id', editTurnId.value)

        if(error) throw error

        turnsArray.value = turnsArray.value.map( turn => {

            if(turn.id === editTurnId.value) {
                return { ...turn,
                    nombreTurno: nombreTurno.value,
                    apellidoTurno: apellidoTurno.value,
                    fechaTurno: fechaTurno.value,
                    horaTurno: horaTurno.value,
                    dniTurno: dniTurno.value,
                }
            }

            return turn
        })

    } catch (error) {
        console.log(error)
    }


    editTurnId.value = null;
}

const handleCancel = () => {
    nombreTurno.value = null
    apellidoTurno.value = null
    dniTurno.value = null
    fechaTurno.value = null
    horaTurno.value = null

    editTurnId.value = null
}


//function to refresh turns when a new one is created
const channel = ref('')

const channelInsert = () => {
    channel.value = supabase
    .channel('new-turn-channel')
    .on(
        'postgres_changes',
        {
        event: 'INSERT',
        schema: 'public',
        table: 'turno',
        },
        (payload) => {
        // Agregar el nuevo turno a la lista
        turnsArray.value.push(payload.new);
        }
    )
    .subscribe((status) => {
        if (status === 'CHANNEL_ERROR') {
            console.error('Error en la suscripción al canal.');
        }
    });
};

onMounted(() => {
    showTurns(); // Mostrar los turnos existentes desde la base de datos
    channelInsert(); // Iniciar la suscripción al canal para actualizar los turnos al insertar uno nuevo
});

onUnmounted(() => {
    if (channel.value) {
        supabase.removeChannel(channel.value); // Eliminar la suscripción cuando el componente se desmonta
    }
});

</script>

<style lang="scss" scoped>

</style>