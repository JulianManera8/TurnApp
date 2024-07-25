<template>
    <section class="all-container">

        <div class="title-container">
            <RouterLink to="/" class="link"><h3>TurnApp</h3></RouterLink>
        </div>

        <div class="nav-container">
            <ul>
                <li> <RouterLink to="/" class="link"> Home </RouterLink></li>
                <li> <RouterLink to="/turns" class="link"> Turns </RouterLink></li>
                <li> <RouterLink to="/help" class="link"> Help </RouterLink></li>
            </ul>
        </div>

        <div class="dark-log-container">
            <Darkmode />
            <div class="log-container">
                <button v-if="!loged" @click.prevent="login"> LogIn </button>
                <BtnLogout v-else @handleClick="logOut"/>
            </div>
        </div>

    </section>
    
    <section class="popupAuth-container" v-if="showPopup">

        <div class="close-container">
            <v-icon @click="showPopup = !showPopup" name="io-close-circle-outline" scale="2" class="close-icon"></v-icon>
        </div>

        <div class="login-container" v-if="signIn">
            <LoginForm @changeForm="handleChangeForm"/>
        </div>
        <div class="register-container" v-else>
            <RegisterForm @changeForm="handleChangeForm"/>
        </div>

    </section>

    <RouterView />
</template>

<script setup>
import '../../css/colors.css'

import Darkmode from '../LayoutComponents/Darkmode.vue'
import BtnLogout from '../Auth/BtnLogout.vue'
import LoginForm from '../Auth/LoginForm.vue'
import RegisterForm from '../Auth/RegisterForm.vue'

import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { supabase } from '@/supabase.js'


//check if the user is logged in
const loged = ref(false)

const getAuth = async () => {
  const {data, error} = await supabase.auth.getUser()
  try {
    // console.log(data.user)
    if(data.user === null) {
        loged.value = false 
    } else {
        loged.value = true
    }
  } catch (error) {
    console.log(error)
  }
}


//show popup window to login or register
const signIn = ref(true)
const showPopup = ref(false)

const login = () => {
    showPopup.value = !showPopup.value
}

//show register instead of login
const handleChangeForm = () => {
    signIn.value = !signIn.value
}

//logout of the account
const logOut = async () => {
    const {error} = await supabase.auth.signOut();
    try {
        getAuth();
    } catch (error) {
        console.log(error)
    }
};

//to verify if the user is logged in or not, as soon as the user enters the web.
onMounted( () => {
  getAuth()
})

</script>

<style lang="scss" scoped>

.all-container {
    //background-color: var(--color-fondo);
    background-color: rgba(255, 162, 0, 0.329);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    transition: all 0.3s;
}

.title-container {
    .link {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
}

.nav-container {

    ul {
        display: flex;
        flex-direction: row;
        gap: 20px;
        list-style: none;

        .link {
            text-decoration: none;
            color: black;
            cursor: pointer;
        }
    }

}

.dark-log-container {
    display: flex;
    gap: 10px;
}

.popupAuth-container {
    background-color: rgb(255, 212, 212);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: fit-content;
    width: 450px;
    box-shadow: 0px 0px 10000px 200px black;
    border-radius: 1rem;
    padding: 15px;

    .close-container {
        position: absolute;
        right: 10px;
        top: 10px;

        .close-icon {
            opacity: .5;
            transition: all 0.20s;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

    }

}

</style>