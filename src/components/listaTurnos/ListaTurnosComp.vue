<template>
    <div>
        <div class="container-tittle">
            <h1> Turnos </h1>
        </div>
        <div class="container-btn-newTurn">
            <Button @click="newTurn = !newTurn"> Nuevo Turno </Button>
        </div>
        <section class="container-turnList">
            <div class="content-list">
                <ul>
                    <li> 
                        <span class="fecha">11/05 </span> ||  
                        <span class="hora"> 20:00 </span> ||
                        <span class="apellido-nombre"> Manera Julian</span> ||
                        <span class="editar"> <v-icon name="bi-pencil-fill" scale="1.4" @click="editTurn = !editTurn"> </v-icon> </span> ||
                        <span class="borrar"> <v-icon name="md-deleteforever-round" scale="1.5"> </v-icon></span> ||
                    </li>
                </ul>
            </div>
        </section>
        <div class="container-popupNewTurn" v-if="newTurn">
            <popupNuevoTurno />
        </div>
        <div class="container-popupEditTurn" v-if="editTurn">
            <popupEditarTurno />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import popupNuevoTurno from '@/components/formularios/PopupNuevoTurno.vue'
import popupEditarTurno from '@/components/formularios/PopupDetalles.vue'

let newTurn = ref(false)
let editTurn = ref(false)

//aca tengo q agarrar los turnos que esten en la base de datos y mostrarlos


</script>

<style scoped>

</style>