<template>
    <img src="../assets/img/fondo.png" class="fondo" alt="">
    <div class="container-general">
        <section class="container-forms">
            <div class="container-login"  v-if="!verRegistro">
                <formLogin @mostrarFormRegistro="mostrarRegistro" />
            </div>
            <div class="container-registro" v-else="verRegistro">
                <formRegistro @mostrarLogin="mostrarLogin" />
            </div>
        </section>

        <section class="container-slogan">       

            <div class="container-texto">
                <div class="titulo">
                    <h1> TurnApp </h1>
                </div>

                <div class="slogan">
                    <p> Gestiona tus turnos con facilidad y comodidad. </p>
                </div>

                <div>
                    <img src="../assets/img/calendar.png" alt="calendar" class="logoCalendario">
                </div>
            </div>

        </section>
    </div>
</template>

<script setup>

    import { ref } from 'vue';

    import formLogin from '../components/formularios/FormLogin.vue'
    import formRegistro from '../components/formularios/FormRegistro.vue';

    const verRegistro = ref(false);

    function mostrarRegistro() {
        verRegistro.value = true
    }

    function mostrarLogin() {
        verRegistro.value = false
    }


</script>

<style scoped>
/* K2D Font */
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
/*   font-family: "K2D", sans-serif;  */

* {
    margin: 0;
    padding: 0;
}

.fondo{
    width: 60vw;
    height: 100vh !important;
    position: absolute;
    right: 0;
    top: 0;
}

.container-general {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100vh !important;
}

.container-forms {
    display: flex;
    min-height: 100vh;
    margin-left: 12%;
    z-index: 1000;

    .container-registro {
        margin-top: 0px !important;
    }

}

.container-slogan {
    display: flex;
    text-align: center;
    align-items: top;
    margin-right: 20px;
    margin-top: 80px;
    z-index: 1000;
    width: 40%;

    h1 {
        color: white;
        font-family: "K2D", sans-serif; 
        font-size: 60px;
    }

    p {
        margin-top: 20px;
        color: rgb(255, 255, 255);
        font-family: "K2D", sans-serif; 
        font-weight: 500;
    }

    img {
        filter: grayscale(100%);
    }
}





</style>