<template>
    <section class="all-container">

        <div class="title-container">
            <RouterLink to="/" class="link title">
                <h1>WebTurn</h1>
            </RouterLink>
        </div>

        <div class="nav-container">
            <template v-if="!showMenu">
                <ul>
                    <li>
                        <RouterLink to="/" class="link nav"> Home </RouterLink>
                    </li>
                </ul>
                <div class="log-container">
                    <router-link to="/login" v-if="!loged"> <button class="button"> Sign In! </button> </router-link>
                    <BtnLogout v-else @handleClick="logOut" />
                </div>
            </template>

            <template v-else>
                <ul>
                    <label class="burger" for="burger">
                        <input type="checkbox" id="burger" @click="displayMenu = !displayMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <transition name="displayMenu">
                        <div v-if="displayMenu" class="responsive-container"
                            :style="{ display: displayMenu ? 'flex' : 'none' }">
                            <li>
                                <RouterLink to="/" class="link nav"> Home </RouterLink>
                            </li>
                            <li>
                                <div class="log-container">
                                    <router-link to="/login" v-if="!loged">
                                        <button class="button"> Sign In! </button>
                                    </router-link>
                                    <BtnLogout v-else @handleClick="logOut" />
                                </div>
                            </li>
                        </div>
                    </transition>
                </ul>
            </template>

        </div>

    </section>


    <RouterView />
</template>

<script setup>
import '../../css/colors.css'

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


//checkear el window width y en base a eso activar o desactivar el menu hamburguesa y todo eso
const showMenu = ref(false)
const displayMenu = ref(false)

if(window.innerWidth < 500) {
    showMenu.value = true;
} 

window.addEventListener('resize', () => {
    if (window.innerWidth < 500) {
       return showMenu.value = true
    }
    return showMenu.value = false
});



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
    background: linear-gradient(to bottom,rgb(54, 156, 0), white);
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
        color: rgb(0, 0, 0);
        text-decoration: none;
        cursor: pointer;
        font-family: "Ubuntu", sans-serif;
        font-size: larger;
    }
}

.responsive-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to top,rgb(54, 156, 0), white);
    top: 85px;
    right: 0;
    gap: 20px;
    width: 100%;
    padding: 20px 0px;
    z-index: 2000;
}

.displayMenu-enter-active, .displayMenu-leave-active {
    transition: all 0.325s ease-in;
    /* This makes sure the transition occurs over the duration you specified */
}

.displayMenu-enter-from {
    transform: translateX(100%);
}

.displayMenu-enter-to {
    transform: translateX(0);
}

.displayMenu-leave-from {
    transform: translateX(0);
}

.displayMenu-leave-to {
    transform: translateX(100%);
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


//menu when responsive
.burger {
  position: relative;
  width: 40px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
</style>