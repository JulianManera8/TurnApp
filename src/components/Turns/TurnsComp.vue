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

                <ol v-if="storeUser.user != null">
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
                            <input type="text" :placeholder="turn.nombreTurno" v-model="newName">
                            <input type="text" :placeholder="turn.apellidoTurno" v-model="newLastname">
                            <input type="date" :placeholder="turn.fechaTurno" v-model="newDate">
                            <input type="time" :placeholder="turn.horaTurno" v-model="newHour">
                            <input type="number" :placeholder="turn.dniTurno" v-model="newDni">

                            <button @click.prevent="saveEdit(turn.id)"> Save </button>
                            <button @click.prevent="handleCancel"> Cancel </button>
                        </div>

                    </li>
                </ol>

                <p v-if="storeUser.user == null"> Login to get access to your turns! </p>
                <p v-if="turnsArray.length == 0 && storeUser.user != null && !popupNewTurn"> There are no turns for
                    today!
                </p>
            </div>

        </div>

        <div v-if="!popupNewTurn && !editTurnId" class="btnAddTurn-container">
            <button @click.prevent="handleClick">Add turn</button>
        </div>

        <div>
            <h2>calendario</h2>
            <div>

                <calendar-multi @change="onChange"
                    :value="formatedDates"
                    min="2024-01-01" 
                    max="2024-12-31" 
                    first-day-of-week="1"
                    show-outside-days="true" 
                >
                    <calendar-month></calendar-month>
                </calendar-multi>
            </div>
        </div>
    </div>
</template>

<script setup>
import NewTurn from '../Turns/NewTurn.vue'

import { ref, onMounted, onUnmounted, watch } from 'vue'
import { supabase } from '@/supabase.js'
import { useUserStore } from '../../stores/userStore.js'
const storeUser = useUserStore();

import { useTurnsStore } from '../../stores/turnsStore.js'
const storeTurns = useTurnsStore()

//functionality to select and show turns of the day
const turnsArray = ref([])

const showTurns = async () => {
    
    if(storeUser.user === null ) {
        return
    }

    try {
        const {data, error} = await supabase
            .from('turno')
            .select('*')
            .eq('user_id', storeUser.user.id)
        ;

        if(error) throw error

        for(let turn of data) {
            turnsArray.value.push(turn)
        }

        storeTurns.updateArray(turnsArray.value)

    } catch (error) {
        console.log(error.message)
    }

}


//show the form to insert a new turn
const popupNewTurn = ref(false)

const handleClick = () => {
    if(storeUser.user === null) {
        return console.log('TENES  Q LOG PERRO')
        //ACA TENGO Q ACTIVARLE EL POPUP PARA LOGEAR/REGISTRAR
    }

    popupNewTurn.value = !popupNewTurn.value;
}

//function to delete a turn and refresh the turnsarray and dabatase
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

        storeTurns.updateArray(turnsArray.value)

    } catch (error) {
        console.log(error.message)
    }

}

//function to update turns
const editTurnId = ref(null);

const newName = ref(null);
const newLastname = ref(null);
const newDni = ref(null);
const newDate = ref(null);
const newHour = ref(null);

//find the turn that i am currently editing and give those variables its data
const editTurn = (id) => {
  const turn = turnsArray.value.find(turn => turn.id === id);
  if (turn) {
    editTurnId.value = id;

    newName.value = turn.nombreTurno;
    newLastname.value = turn.apellidoTurno;
    newDni.value = turn.dniTurno;
    newDate.value = turn.fechaTurno;
    newHour.value = turn.horaTurno;
  }
};

//update the turn in database, and the array in store.
const saveEdit = async () => {

  try {
    const { error, data } = await supabase
      .from('turno')
      .update({
        nombreTurno: newName.value,
        apellidoTurno: newLastname.value,
        fechaTurno: newDate.value,
        horaTurno: newHour.value,
        dniTurno: newDni.value,
      })
      .eq('id', editTurnId.value)
      .select();

    if (error) throw error;


    turnsArray.value = turnsArray.value.map(turn => {

      if (turn.id === editTurnId.value) {
        return { ...turn, ...data[0] };
      }
      return turn;

    });

    storeTurns.updateArray(turnsArray.value)

    // Reinicializar los valores después de guardar
    editTurnId.value = null;
    newName.value = null;
    newLastname.value = null;
    newDni.value = null;
    newDate.value = null;
    newHour.value = null;

  } catch (error) {
    console.log('Error al actualizar el turno:', error.message);
  }
};

//cancel editing
const handleCancel = () => {
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