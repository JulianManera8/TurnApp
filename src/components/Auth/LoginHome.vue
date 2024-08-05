<template>
    <div class="forms-container">
      <transition
        name="form"
        mode="out-in"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
      >
        <LoginForm v-if="login" @changeForm="handleChange" key="loginForm" />
        <RegisterForm v-else @changeForm="handleChange" key="registerForm" />
      </transition>
    </div>
  </template>

<script setup>
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

import { ref } from 'vue';

const login = ref(true);

const handleChange = () => {
  login.value = !login.value;
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  setTimeout(() => {
    el.style.opacity = 1;
    done();
  }, 325); // Esperar 500ms antes de entrar
};

const leave = (el, done) => {
  el.style.opacity = 0;
  setTimeout(done, 325); // Terminar después de 500ms
};
</script>

<style lang="scss" scoped>

.form-enter-active, .form-leave-active {
    transition: all 0.325s ease-in;
}

.form-enter-form, .form-leave-to { 
    opacity: 0;
}


</style>