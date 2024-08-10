<template>
    <div class="all-container">

        <div class="title-turns-container">
            <section class="title-container">

                <h3 class="turns-title"> TURNS </h3>

                <div v-if="!popupNewTurn && !editTurnId" class="btnAddTurn-container">
                    <button type="button" class="button" @click.prevent="handleClick">
                        <span class="button__text">Add Turn</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"
                                stroke="currentColor" height="24" fill="none" class="svg">
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

                    <template v-if="storeUser.user != null">
                        <table>
                            <tbody class="body-container">
                                <tr v-for="turn in turnsArray" :key="turn.id">

                                    <template v-if="editTurnId !== turn.id">
                                        <td class="body-item">
                                            <p> {{ turn.nombreTurno }}</p>
                                        </td>
                                        <td class="body-item">
                                            <p> {{ turn.apellidoTurno }}</p>
                                        </td>
                                        <td class="body-item">
                                            <p :data-date="turn.fechaTurno"> {{ formatDisplayDate(turn.fechaTurno) }}
                                            </p>
                                        </td>
                                        <td class="body-item">
                                            <p> {{ formatDisplayHour(turn.horaTurno) }}</p>
                                        </td>
                                        <td class="body-item">
                                            <div class="icons-container">
                                                <v-icon class="icon-trash" name="bi-trash" scale="1.3"
                                                    @click="removeTurn(turn.id)" />
                                                <v-icon class="icon-edit" name="bi-pencil-fill" scale="1.1"
                                                    @click="editTurn(turn.id)" />
                                            </div>
                                        </td>
                                    </template>

                                    <template v-else @submit="saveEdit(turn.id)">
                                        <td> <input class="edit-item" id="name" type="text"
                                                :placeholder="turn.nombreTurno" v-model="newName" /> </td>
                                        <td> <input class="edit-item" id="lastname" type="text"
                                                :placeholder="turn.apellidoTurno" v-model="newLastname" /> </td>
                                        <td> <input class="edit-item" id="date" type="date"
                                                :placeholder="turn.fechaTurno" v-model="newDate" /> </td>
                                        <td> <input class="edit-item" id="time" type="time"
                                                :placeholder="turn.horaTurno" v-model="newHour" /> </td>
                                        <td>
                                            <div class="icons-container">
                                                <v-icon class="cancelEditBtn" scale="1.3" name="io-close-circle-outline"
                                                    @click.prevent="handleCancel" />
                                                <v-icon class="saveEditBtn" scale="1.3"
                                                    name="io-checkmark-circle-outline"
                                                    @click.prevent="saveEdit(turn.id)" />
                                            </div>
                                        </td>

                                    </template>

                                </tr>
                            </tbody>
                        </table>
                    </template>

                    <div class="msg-container">
                        <p class="noUser" v-if="storeUser.user == null">Login to get access to your turns!</p>
                        <p class="noTurns" v-if="turnsArray.length == 0 && storeUser.user != null && !popupNewTurn">
                            There are no turns.</p>
                    </div>
                </div>


            </section>
        </div>

        <section class="callendar-container">
            <div>
                <calendar-multi :value="formattedDates.value" @change="onDateChange" min="2024-01-01" max="2024-12-31"
                    first-day-of-week="1" show-outside-days="true">

                    <v-icon name="fa-arrow-left" class="leftArrow" aria-label="Previous" slot="previous"></v-icon>
                    <v-icon name="fa-arrow-right" class="rightArrow" aria-label="Next" slot="next"></v-icon>

                    <div class="grid">
                        <calendar-month ref="calendar"></calendar-month>
                    </div>

                </calendar-multi>
            </div>

        </section>

    </div>
</template>

<script setup>
import NewTurn from '../Turns/NewTurn.vue'

import { CalendarMonth, CalendarMulti } from 'cally'

import { supabase } from '@/supabase.js'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'

import { useUserStore } from '../../stores/userStore.js'
const storeUser = useUserStore();

import { useTurnsStore } from '../../stores/turnsStore.js'
const storeTurns = useTurnsStore();

import { useRouter } from 'vue-router'
const router = useRouter();


//functionality to select and show turns of the day
//and also to ccomplete the callendar with turns
const turnsArray = ref([])
const formattedDates = ref('')
const showTurns = async () => {

    if (storeUser.user === null) {
        formattedDates.value = ''
        return
    }

    try {
        const { data, error } = await supabase
            .from('turno')
            .select('*')
            .eq('user_id', storeUser.user.id)
            ;

        if (error) throw error

        for (let turn of data) {
            turnsArray.value.push(turn)
        }

        setOrder(turnsArray.value)

        storeTurns.updateArray(turnsArray.value)

        formattedDates.value = computed(() => {
            if (storeUser.user === null) {
                return ''
            }
            return storeTurns.turns.map(turn => turn.fechaTurno).join(' ')
        });

    } catch (error) {
        console.log(error.message)
    }

}

//function to order the turns in display
function setOrder(array) {

    array.value = array.sort((a, b) => {
        const dateA = new Date(a.fechaTurno)
        const dateB = new Date(b.fechaTurno)

        if (dateA.getTime() === dateB.getTime()) {
            const timeA = a.horaTurno
            const timeB = b.horaTurno

            return timeA.localeCompare(timeB)
        }

        return dateA - dateB
    })

    array.value = array.map(turn => {
        const today = new Date().toLocaleDateString('en-CA');

        if (turn.fechaTurno === today) {
            nextTick(() => {
                const element = document.querySelectorAll(`[data-date="${turn.fechaTurno}"]`)
                element.forEach(el => el.classList.add('turnToday'))
            })
        }

        return turn
    })

    // console.log(array.value)
    turnsArray.value = array
}

//function to format the display of the date and hour
function formatDisplayDate(date) {
    let dateStr = date
    const [year, month, day] = dateStr.split('-');
    return dateStr = `${day}/${month}/${year}`;
}

function formatDisplayHour(hour) {
    return hour.slice(0, 5)
}


//show the form to insert a new turn
const popupNewTurn = ref(false)
const handleClick = () => {
    if (storeUser.user === null) {
        router.push('/login')
        //ACA TENGO Q ACTIVARLE EL POPUP PARA LOGEAR/REGISTRAR
    }

    return popupNewTurn.value = true;
}


//function to delete a turn and refresh the turnsarray and dabatase
const removeTurn = async (idDeleted) => {

    const confirmDelete = confirm('Are you sure you want to delete this turn?')
    if (!confirmDelete) {
        return
    }

    try {
        const { error } = await supabase
            .from('turno')
            .delete()
            .eq('id', idDeleted)

        if (error) throw error

        turnsArray.value = turnsArray.value.filter(turn => {
            return turn.id !== idDeleted
        })

        setOrder(turnsArray.value)

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

        setOrder(turnsArray.value)

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

const calendar = ref(null)


const disableButtons = async () => {
    await nextTick();

    const shadowRoot = calendar.value.shadowRoot;

    if (shadowRoot) {
        const dayButtons = shadowRoot.querySelectorAll('[part~="button"][part~="day"]');

        dayButtons.forEach(button => {
            button.disabled = true
            button.style = 'opacity: 1; cursor: default';
        });
    }
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
                if (payload.new.user_id === storeUser.user.id) {
                    // Agregar el nuevo turno a la lista
                    turnsArray.value.push(payload.new);
                    setOrder(turnsArray.value);
                }
            }
        )
        .subscribe((status) => {
            if (status === 'CHANNEL_ERROR') {
                console.error('Error en la suscripción al canal.');
            }
        });
};

onMounted(() => {
    disableButtons();
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
    flex-wrap: wrap;
}


.title-turns-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 2% 10px;
    width: 40%;
    min-width: 565px;
    gap: 15px;

    .title-container {
        display: flex;
        align-items: center;
        justify-content: left;

        .turns-title {
            font-size: 28px;
            font-weight: bold;
            margin-right: 10px;
        }
    }

    @media (width < 879px) {
        align-items: center;
    }
}

.turns-container {
    margin-bottom: 90px;
}

.turns-content {
    display: flex;
    justify-content: left;
    width: 100%;

    .msg-container {
        position: fixed;
        left: 30px;
    }

    table {
        width: 100%;
        text-align: center;
        line-height: 60px;
        border-collapse: collapse;
        table-layout: fixed;
        transition: all 0.15s;
        font-size: large;

        td {
            width: 130px;
        }

        td:nth-child(5) {
            width: 100px;
        }


        tr {
            border-top: 1px solid rgb(221, 221, 221);
            border-bottom: 1px solid rgb(221, 221, 221);
            transition: all 0.15s;
        }

        tr:hover {
            /* Color al pasar el cursor sobre una fila */
            background-color: #62e30012;
            transition: all 0.15s;
        }

    }
}

.turnToday {
    color: rgb(54, 156, 0);
}

.edit-item {
    padding: 5px 7px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 1rem;
}

.icons-container {
    display: flex;
    flex-direction: row !important;
    gap: 10px;
    margin-left: 10px;


    .cancelEditBtn,
    .saveEditBtn,
    .icon-trash,
    .icon-edit {
        cursor: pointer;
    }

    .icon-trash {
        color: rgb(139, 0, 0);
    }

    .saveEditBtn:hover {
        background-color: #00d53577;
        border-radius: 50%;
        transition: backgroundColor 0.15s;
    }

    .cancelEditBtn:hover {
        background-color: #e9000077;
        border-radius: 50%;
        transition: backgroundColor 0.15s;
    }
}


#name {
    width: 80px;
}

#lastname {
    width: 90px;
}

#date {
    width: 100px;
}

#time {
    width: 65px;
}

// .msg-container {
//     width: 100%;
//     display: flex;
//     justify-content: left;
//     text-align: left;
//     background-color: red;
// }

.btnAddTurn-container {
    margin-left: 30px;
}

.callendar-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 15px;
}

calendar-multi {

    &::part(button) {
        border: 1px solid #ffffff;
        background-color: transparent;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    .leftArrow,
    .rightArrow {
        height: 20px;
        width: 20px;
        fill: black;
        background-color: transparent;
        padding: 7px;
        transition: all 0.2s;
    }

    .leftArrow:hover {
        transform: translateX(-5px);
    }

    .rightArrow:hover {
        transform: translateX(5px);
    }

    calendar-month {

        &::part(heading) {
            text-transform: uppercase;
            font-weight: bold;
        }

        &::part(head) {
            font-size: medium;
            color: rgb(0, 0, 0);
        }


        &::part(today) {
            color: red;
        }

        &::part(day) {
            font-size: medium;
            border-radius: 50%;
            transition: all 0.2s;

            &:hover {
                background-color: rgba(55, 156, 0, 0.162);
                transition: all 0.2s;
            }
        }

        &::part(selected) {
            font-size: small;
            color: white;
            --color-accent: rgb(54, 156, 0);
            --color-text-on-accent: #ffffff;
            border-radius: 50%;
            transition: all 0.2s;
        }




    }
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
    scale: 80%;
}

.button,
.button__icon,
.button__text {
    transition: all 0.3s;
    border-radius: 0.7rem;
    font-size: large;
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
    background-color: rgb(54, 156, 0);
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


@media (width < 620px) {

    .title-turns-container {
        align-items: center;
        margin: auto;
        max-width: 95%;
        min-width: 95%;
        line-height: 130%;
        


        .title-container {
            width: 91%;
            text-align: left;
            align-items: left !important;
            justify-content: left;
        }
    }

    .turns-container {
        max-width: 90%;
        overflow: auto;
    }

    table {
        td:nth-child(1) {
            width: 100px;
        }

        td:nth-child(2) {
            width: 100px;
        }
        td:nth-child(3) {
            width: 160px;
        }

        td:nth-child(4) {
            width: 100px;
        }
    }

    .msg-container {
        display: flex;
        width: 100vw;
        overflow: none !important;
    }

    .edit-item {
        width: 80% !important;
        height: 30px;
        margin-bottom: 10px;
        font-size: medium;
    }

    td {

    }

   

}
</style>