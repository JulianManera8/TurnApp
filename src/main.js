import '../src/css/colors.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoCloseCircleOutline, BiPencilFill, BiTrash, BiEyeSlash, BiEye, IoCheckmarkCircleOutline, FaArrowRight, FaArrowLeft } from "oh-vue-icons/icons";
addIcons( IoCloseCircleOutline, BiPencilFill, BiTrash, BiEyeSlash, BiEye, IoCheckmarkCircleOutline, FaArrowRight, FaArrowLeft );

import "cally";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
