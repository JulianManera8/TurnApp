<template>
    <div class="container-navbar">
        <div class="container-avatar">
            <img src="../../assets/img/user.png" alt="" width="60px">
        </div>
        <div class="container-titulo">
            <h1>TurnApp</h1>
        </div>
        <div class="container-lupa-desplegable">
            <div class="container-lupa">
                <!-- icono y funcion de la lupa -->
            </div>
            <div class="container-desplegable">
                <desplegable />
            </div>
        </div>
    </div>
</template>

<script setup>
import desplegable from "../navbar/desplegableComp.vue"
</script>

<style scoped>

.container-navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(74, 195, 251);
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    height: 70px;
    align-items: center;
}






</style>