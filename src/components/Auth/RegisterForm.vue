<template>

  <div>
    
    <h1>CREATE AN ACCOUNT</h1>

    <form @submit="handleCreate">

      <div class="input-container">
        <input type="text" name="name" id="name" placeholder="Name" autocomplete="name" v-model="name" />
        <input type="text" name="lastname" id="lastname" placeholder="Lastname" v-model="lastname"/>
        <input type="email" name="email" id="email" placeholder="Email" autocomplete="email" v-model="email"/>
        
        <div class="password-container">
          <input :type="inputType" class="inputPassword" name="password" id="password" placeholder="Password" autocomplete="current-password" v-model="password"  />
          <input :type="inputType" class="inputPassword" name="repPassword" id="repPassword" placeholder="Confirm password" autocomplete="current-password" v-model="repPassword" />

          <div class="icons-container">
            <v-icon class="hidingPassword" v-if="showPassword" name="bi-eye-slash" scale="1.4" @click="toggleType" />
            <v-icon class="showingPassword" v-else name="bi-eye" scale="1.4" @click="toggleType" />
          </div>
        </div>
        
      </div>  

      <p v-if="errorMsg" class="errorMsg"> {{ errorMsg }} </p>

      <div class="btn-container">
        
        <button type="submit" class="btn-signIn" @click.prevent="handleCreate">Create!</button>
      </div>

      <p style="margin-top: 20px;">Already have an account? <button class="linkSignIn" @click.prevent="$emit('changeForm')">Sign In!</button></p>

    </form>

  </div>

</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();

import { ref } from 'vue'
import { supabase } from '@/supabase.js'


const name = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const repPassword = ref('')

const errorMsg = ref(false)
//function to create account in supabase
const signUp = async () => {

  if(email.value && password.value && name.value && lastname.value && repPassword.value) {

    errorMsg.value = false

    if(repPassword.value === password.value) {

      try {
        const {error, data} = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
          options: {
            data: {
              name: name.value,
              lastname: lastname.value
            }
          }
        });

        if(error) throw error
        setTimeout(() => {
          router.push('/')
        }, 1000);

      } catch (error) {
        errorMsg.value = 'This email has already been registered!'
        setTimeout(() => {
          errorMsg.value = false
        }, 2500);
      }

    } else {
      errorMsg.value = 'Password do not match'
      setTimeout(() => {
        errorMsg.value = false
      }, 2500);
    };

  } else {
    errorMsg.value = 'You must complete all.'
  };

}

//function to create account and then remove de popup to login/register without emits.
const handleCreate = () => {
  signUp();
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


//emit to change to form login
const changeForm = () => {
  emit('changeForm')
}


</script>

<style lang="scss" scoped>

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
  margin: 30px 0;
  font-size: 40px;
}  
  

.input-container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  max-width: 300px;
  min-width: 300px;
  
  input {
    padding: 13px !important;
    margin: 0;
    border-radius: 20px;
    background-color: rgb(227, 227, 227);
    border: none;
    color: black;
  }
}

.password-container {
  display: flex;
  width: 100%;
  position: relative;
  gap: 20px;
    
  .icons-container {
    position: absolute;
    right: -35px;
    top: 8px;
  
    .hidingPassword,
    .showingPassword {
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
  margin: 20px 0;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgb(0, 184, 184);
  }
}
  
.linkSignIn {
  color: teal;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 50px;
  font-size: large;

  &:hover {
    color: rgb(0, 184, 184);
  }
}

</style>