<template>
    <div>
        <h1>SIGN IN</h1>

        <form @submit="signIn">

            <div class="input-container">
                <input type="email" name="email" id="email" placeholder="Email" v-model="email" autocomplete="username"/>
                <div class="password-container">
                    <input class="inputPassword" :type="inputType" name="password" autocomplete="current-password" id="password" placeholder="Password" v-model="password" />
                    <div class="icons-container">
                        <v-icon class="hidingPassword" v-if="showPassword" name="bi-eye-slash" scale="1.4" @click="toggleType" />
                        <v-icon class="showingPassword" v-else name="bi-eye" scale="1.4" @click="toggleType" />
                    </div>
                </div>
            </div>

            <p v-if="errorMsg" class="errorMsg"> {{ errorMsg }}</p>
            <div class="btn-container">

                <button type="submit" class="btn-signIn" @click.prevent="signIn">Sign In!</button>

                <div class="btn-container-social">
                    <button class="btn-social-item" value="google" name="provider"  type="submit" @click.prevent="signInGoogle"> <img src="../icons/google.png" alt="google"> Continue with Google </button>
                    <!-- <button class="btn-social-item" value="facebook" name="provider"  type="submit" @click.prevent="signInFacebook"><img src="../icons/facebook.png" alt="facebook"> Continue with Facebook</button>  -->
                </div>
  
            </div>

            <p> New here? <button class="linkRegister" @click.prevent="$emit('changeForm')"> Create an account </button> </p>
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

import { ref } from 'vue'
import { supabase } from '@/supabase.js'

const email = ref('')
const password = ref('')

const errorMsg = ref(false)

//function to login using the email and password
const signIn = async () => {

    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        });

        if (error) throw error

        setTimeout(() => {
            router.push('/')
        }, 1000);

    } catch (error) {
        errorMsg.value = 'Email or password incorrect'

        setTimeout(() => {
            errorMsg.value = false
        }, 3000);
    }
  
}

//function to login using google
const signInGoogle = async () => {

    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })

        if(error) throw error

    } catch (error) {
        console.log(error.message)
    }

}

//functionality to show or hide the password
const showPassword = ref(false)
const interruptor = ref(true) 
const inputType = ref('password')

const toggleType = () => {
    showPassword.value = !showPassword.value
    interruptor.value = !interruptor.value

    if(!interruptor.value) {
       return inputType.value = 'text'
    } 

    return inputType.value = 'password'
}



//emit de cambiar de formulario

const changeForm = () => {
    emit('changeForm')
}

</script>

<style scoped>

* {
    color: rgb(123, 123, 123);
    display: flex;
    flex-direction: column;
    margin: auto;
    box-sizing: content-box;
}


h1 {
    color: teal;
    display: flex;
    text-align: center;
    width: 100%;
    margin: 30px 0 30px 0;
    font-size: 40px;
}  

.input-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    max-width: 300px;
    min-width: 300px;

    input {
        padding: 11px !important;
        margin: 0;
        border-radius: 20px;
        border: none;
        background-color: rgb(227, 227, 227);
    }
}

.password-container {
    display: flex;
    width: 100%;
    position: relative;

    .icons-container {
        position: absolute;
        right: -35px;
        top: 6px;

        .hidingPassword, .showingPassword {
            cursor: pointer;
        }
    }
}

.errorMsg {
    color: red;
    margin-bottom: 10px;
}

.btn-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.btn-signIn {
    padding: 10px 15px;
    font-size: large;
    border-radius: 20px;
    border: 0 !important;
    outline: 0 !important;
    background: teal;
    color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 150px;
    margin-top: 10px;
    display: flex;
    align-items: center;    

    &:hover {
        background-color: rgb(0, 184, 184);
    }
}

.btn-container-social {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
    width: 100%;

    .btn-social-item {
    
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 15px;
        cursor: pointer;
        background-color: rgba(0, 193, 193, 0.822);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 20px;
        font-size: medium;

        &:hover {
            background-color: rgba(0, 184, 184, 0.484);
        }

        img {
            width: 30px;
            margin: 0;
            display: flex;
        }
    }


}

.linkRegister { 
    color: teal;
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-bottom: 170px;
    font-size: large;

    &:hover {
        color: rgb(0, 184, 184);
    }
}

</style>

