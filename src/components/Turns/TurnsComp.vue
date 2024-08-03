<template>
    <div class="all-container">

        <div class="title-turns-container">
            <section class="title-container">

                <h3> All your Turns </h3>

                <div v-if="!popupNewTurn && !editTurnId" class="btnAddTurn-container">
                    <button type="button" class="button" @click.prevent="handleClick">
                        <span class="button__text">Add Turn</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor"
                                height="24" fill="none" class="svg">
                                <line y2="19" y1="5" x2="12" x1="12"></line>
                                <line y2="12" y1="12" x2="19" x1="5"></line>
                            </svg></span>
                    </button>
                </div>
            </section>
    
            <section class="turns-container">
    
                <div v-if="popupNewTurn">
                    <NewTurn @closePopup="popupNewTurn = !popupNewTurn" />
                </div>
    
                <div class="turns-content">
                    
                    <div class="order-container">
                        <!-- aca va a ir un filter para ordernarlos por ultima creacion, o por fecha -->
                        <!-- tmb meterle un searchbar -->
                    </div>

                    <ul v-if="storeUser.user != null">
                        <li v-for="turn in turnsArray" :key="turn.id">
    
                            <div class="turn-item" v-if="editTurnId !== turn.id" >
                                <p class="nameTurn"> {{ turn.nombreTurno }}  </p>
                                <p> {{ turn.apellidoTurno }} <b>|</b> </p>
                                <p> {{ turn.fechaTurno }} <b>|</b> </p>
                                <p> {{ turn.horaTurno }} </p>
                                <div class="icons">
                                    <v-icon class="icon-trash" name="bi-trash" scale="1.3" @click="removeTurn(turn.id)" />
                                    <v-icon class="icon-edit" name="bi-pencil-fill" scale="1.1" @click="editTurn(turn.id)" />
                                </div>
                            </div>
    
                            <div v-else style="display: flex; gap: 5px; flex-wrap: wrap;">
                                <input type="text" :placeholder="turn.nombreTurno" v-model="newName">
                                <input type="text" :placeholder="turn.apellidoTurno" v-model="newLastname">
                                <input type="date" :placeholder="turn.fechaTurno" v-model="newDate">
                                <input type="time" :placeholder="turn.horaTurno" v-model="newHour">
    
                                <button @click.prevent="saveEdit(turn.id)"> Save </button>
                                <button @click.prevent="handleCancel"> Cancel </button>
                            </div>
    
                        </li>
                    </ul>
    
                    <p v-if="storeUser.user == null"> Login to get access to your turns! </p>
                    <p v-if="turnsArray.length == 0 && storeUser.user != null && !popupNewTurn"> There are no turns for today! </p>
    
                </div>
    
    
            </section>
        </div>

        <section class="callendar-container">

            <h2>calendario</h2>

            <div>
                <calendar-multi :value="formattedDates.value" @change="onDateChange" min="2024-01-01" max="2024-12-31"
                    first-day-of-week="1" show-outside-days="true">
                    <calendar-month is-date-disallowed="true"> </calendar-month>
                </calendar-multi>
            </div>

        </section>

    </div>
</template>

<script setup>
import NewTurn from '../Turns/NewTurn.vue'

import { CalendarMulti, CalendarMonth } from 'cally'

import { ref, onMounted, onUnmounted, computed } from 'vue'
import { supabase } from '@/supabase.js'

import { useUserStore } from '../../stores/userStore.js'
const storeUser = useUserStore();

import { useTurnsStore } from '../../stores/turnsStore.js'
const storeTurns = useTurnsStore();


//functionality to select and show turns of the day
//and also to ccomplete the callendar with turns
const turnsArray = ref([])
const formattedDates = ref('')
const showTurns = async () => {
    
    if(storeUser.user === null ) {
        formattedDates.value = ''
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

        formattedDates.value = computed( () => {
            if(storeUser.user === null) {
                return ''
            }
            return storeTurns.turns.map( turn => turn.fechaTurno).join(' ')
        });

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


//functionallity to update turns
const editTurnId = ref(null);

const newName = ref(null);
const newLastname = ref(null);
const newDate = ref(null);
const newHour = ref(null);


//find the turn that i am currently editing and give those variables its data
const editTurn = (id) => {
  const turn = turnsArray.value.find(turn => turn.id === id);
  if (turn) {
    editTurnId.value = id;

    newName.value = turn.nombreTurno;
    newLastname.value = turn.apellidoTurno;
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


// handle callendar
const selectedDates = ref(''); // Para almacenar las fechas seleccionadas

const onDateChange = (event) => {
  selectedDates.value = event.target._props;
  console.log('Fecha seleccionada:', selectedDates.value);
  // Puedes realizar otras acciones aquí, como buscar eventos de ese día, etc.
};


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

.all-container { 
    display: flex;
    justify-content: space-evenly;
}

.title-turns-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 2% 20px;
    width: 50%;
    gap: 15px;

    .title-container {
        display: flex;
    }

    .turns-container {
        display: flex;
        flex-direction: column;
        align-items: left;

        gap: 30px;

        li {
            align-items: left;
            margin: 10px 25px;

            .turn-item {
                display: flex;
                margin-bottom: 20px;
                align-items: center;

                .nameTurn {
                    margin-right: 5px;
                }

                b {
                    margin: 0 10px;
                    color: red;
                }

                .icons {
                    margin-left: 5px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                    padding-bottom: 3px;

                    .icon-trash {
                        color: rgb(143, 0, 0);
                        margin-right: 5px;
                    }

                    .icon-edit {
                        color: rgb(0, 96, 128);

                    }


                }

            }
            
        }

    }
}

.btnAddTurn-container {
    margin-left: 50px;
}

.callendar-container {
    width: 40%;
    background-color: rgba(1, 158, 1, 0.581);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 20px;
}





//Button to add a new turn
.button {
  position: relative;
  width: 130px;
  height: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
  border-radius: 0.7rem;
  font-size: smaller;
}

.button, .button__icon, .button__text {
  transition: all 0.3s;
  border-radius: 0.7rem;
}

.button .button__text {
  transform: translateX(7px);
  color: #fff;
  font-weight: 600;
}

.button .button__icon {
  position: absolute;
  transform: translateX(93px);
  height: 100%;
  width: 37px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button .svg {
  width: 30px;
  stroke: #fff;
}

.button:hover {
  background: #34974d;
}

.button:hover .button__text {
  color: transparent;
}

.button:hover .button__icon {
  width: 130px;
  transform: translateX(0);
}

.button:active .button__icon {
  background-color: #2e8644;
}

.button:active {
  border: 1px solid #2e8644;
}
</style>