<template>
    <div>
        <navbar />
        <div class="main">
            <h1> VISTA DE HOME LOGEADO </h1>
        </div>
<!--   
    aca mostramos:
    - COMPONENTE navbar
    - COMPONENTE lista de turnos de hoy
    - COMPONENTE calendario de este mes, con dias con turnos remarcados
    - COMPONENTE boton nuevo turno
    - COMPONENTE boton gestionar turnos
 -->
    </div>

</template>

<script setup>
import navbar from '../../components/navbar/navbarComp.vue'
</script>

<style scoped>
.main {
    margin-top: 70px;
}

</style>