<template>
    <div>
        <navbar />
        <div class="main">
            <h1> VISTA DE CONFIGURACION LOGEADO </h1>
            <FormConfig />
        </div>
<!--   
    aca mostramos:
    - COMPONENTE boton volver a HOME
 -->
    </div>
</template>

<script setup>
import navbar from '../../components/navbar/navbarComp.vue';
import FormConfig from '@/components/formularios/FormConfig.vue';

</script>

<style lang="scss" scoped>
.main {
    margin-top: 70px;
}
</style>