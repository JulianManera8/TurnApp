<template>
    <section class="all-container">

        <div class="title-container">
            <RouterLink to="/" class="link"><h1>TurnApp</h1></RouterLink>
        </div>

        <div class="nav-container">
            <ul>
                <li> <RouterLink to="/" class="link"> Home </RouterLink></li>
                <li> <RouterLink to="/help" class="link"> Help </RouterLink></li>
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
    background-color: rgba(255, 162, 0, 0.329);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    transition: all 0.3s;
    opacity: var(--opacity);
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
            font-size: larger;
        }
    }

}

.dark-log-container {
    display: flex;
    gap: 10px;
}

// .popupAuth-container {
//     background-color: #f5f5f5;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     height: fit-content;
//     width: 450px;
//     border-radius: 1rem;
//     padding: 15px;
//     z-index: 1000;
//     box-shadow: 0px 0px 100px black;

//     .close-container {
//         position: absolute;
//         right: 10px;
//         top: 10px;

//         .close-icon {
//             opacity: .5;
//             transition: all 0.20s;
//             cursor: pointer;

//             &:hover {
//                 opacity: 0.8;
//             }
//         }

//     }

// }

//button to sign in

.button {
  position: relative;
  padding: 10px 15px 15px;
  font-weight: 700;
  height: 15px;
  font-size: smaller;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.button:hover {
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #007bff, #00bfff);
  transition: all 0.4s ease-in-out;
  z-index: -1;
  border-radius: 50px;
}

.button:hover::before {
  left: 0;
}

</style>