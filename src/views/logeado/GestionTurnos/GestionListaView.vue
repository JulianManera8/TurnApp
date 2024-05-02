<template>
    <div>
        <navbar />
        <div class="main">
            <h1> VISTA DE GESTION DE TURNOS LISTA LOGEADO </h1>
        </div>
<!--   
    aca mostramos:
    - COMPONENTE navbar
    - COMPONENTE btn ver turnos como lista (por defecto)
    - COMPONENTE btn ver turnos como calendario (des-seleccionado)
    - COMPONENTE lista de turnos
    - COMPONENTE boton nuevo turno
    - COMPONENTE volver a home
-->
    </div>
</template>

<script setup>
import navbar from '../../../components/navbar/navbarComp.vue'

</script>

<style lang="scss" scoped>
.main {
    margin-top: 70px;
}
</style>