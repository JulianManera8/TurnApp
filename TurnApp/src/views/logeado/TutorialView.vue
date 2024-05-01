<template>
    <div>
        <navbar />
        <div class="main">
            <h1> VISTA DE TUTORIAL LOGEADO </h1>
        </div>
<!--   
    aca mostramos:
    - COMPONENTE navbar
    - COMPONENTE boton volver a HOME
    - video de como crear, editar y borrar turnos, etc
 -->
    </div>
</template>

<script setup>
import navbar from '../../components/navbar/navbarComp.vue'

</script>

<style lang="scss" scoped>
.main {
    margin-top: 70px;
}
</style>