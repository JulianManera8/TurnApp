import '../src/css/colors.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoCloseCircleOutline, BiPencilFill } from "oh-vue-icons/icons";
addIcons( IoCloseCircleOutline, BiPencilFill );

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
