<template>
    <div>
        <navbar />
        <div class="main">        
            <h1> VISTA DE GESTION DE TURNOS CALENDARIO LOGEADO </h1>
        </div>
<!--   
    aca mostramos:
    - COMPONENTE navbar
    - COMPONENTE btn ver turnos como lista (des-seleccionado)
    - COMPONENTE btn ver turnos como calendario (SELECCIONADO)
    - COMPONENTE calendario de este mes
    - COMPONENTE boton nuevo turno
    - COMPONENTE volver a home
-->
    </div>
</template>

<script setup>
import navbar from '../../../components/navbar/navbarComp.vue';

</script>

<style lang="scss" scoped>
.main {
    margin-top: 70px;
}
</style>