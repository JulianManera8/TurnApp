<template>
    <section class="all-container">

        <div class="title-container">
            <RouterLink to="/" class="link title"><h1>WebTurn</h1></RouterLink>
        </div>

        <div class="nav-container">
            <ul>
                <li> <RouterLink to="/" class="link nav"> Home </RouterLink></li>
                <li> <RouterLink to="/help" class="link nav"> Help </RouterLink></li>
            </ul>
            <Darkmode />
            <div class="log-container">
                <router-link to="/login" v-if="!loged"> <button class="button"> Sign In! </button> </router-link> 
                <BtnLogout v-else @handleClick="logOut"/>
            </div>
        </div>

    </section>
    

    <RouterView />
</template>

<script setup>
import '../../css/colors.css'

import Darkmode from '../LayoutComponents/Darkmode.vue'
import BtnLogout from '../Auth/BtnLogout.vue'

import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue'
import { supabase } from '@/supabase.js'

import { useUserStore } from '../../stores/userStore.js'
const store = useUserStore();


//check if the user is logged in
const loged = ref(null)
const checkUser = () => {
    
    if (store.user === null) {
        loged.value = false
    } else {
        loged.value = true
    }

}

//show popup window to login or register
const signIn = ref(true)


//logout of the account
const logOut = async () => {
    
    try {
        const {error} = await supabase.auth.signOut();

        if(error) throw error

        loged.value = false

    } catch (error) {
        console.alert(error)
    }
};


//to verify if the user is logged in or not, as soon as the user enters the web.
onMounted( () => {
    checkUser();
})

</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

.all-container {
    //background-color: var(--color-fondo);
    // background-color: rgba(42, 121, 0, 0.723);
    background: linear-gradient(to bottom,rgb(58, 167, 0), transparent);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 30px;
    transition: all 0.3s;
    margin-bottom: 30px;
}

.title-container {
    .link {
        color: black;
        text-decoration: none;
        cursor: pointer;
        font-family: "Ubuntu", sans-serif;
        font-size: larger;
    }
}


.nav-container {

    display: flex;
    align-items: center;
    gap: 20px;

    ul {
        display: flex;
        flex-direction: row;
        gap: 20px;
        list-style: none;

        .link {
            text-decoration: none;
            color: black;
            cursor: pointer;
            font-family: "Ubuntu", sans-serif;
            font-size: large;
        }
    }

}

.dark-log-container {
    display: flex;
    gap: 10px;
}

//button to sign in

.button {
  position: relative;
  padding: 10px 10px 13px;
  font-weight: 700;
  height: 12px;
  font-size: 13px;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.button:hover {
  color: #5daa00bc;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}



</style>