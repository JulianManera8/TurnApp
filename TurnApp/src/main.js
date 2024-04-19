import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//primerVue ui
import PrimeVueStyled from 'primevue/styled';
import Button from 'primevue/button';

//iconos
import { OhVueIcon } from "oh-vue-icons";
import { GiMushroomCloud } from "oh-vue-icons/icons";

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVueStyled)
//iconos
app.component('v-icon', GiMushroomCloud)
//ui components
app.component('Button', Button)

app.mount('#app')
