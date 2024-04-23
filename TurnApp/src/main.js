import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

//primerVue ui
import PrimeVueStyled from 'primevue/styled';
import 'primeicons/primeicons.css'

import Button from 'primevue/button';
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Avatar from 'primevue/avatar';
import FileUpload from 'primevue/fileupload';









//iconos
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiMushroomCloud, BiPencilFill } from "oh-vue-icons/icons";
addIcons( GiMushroomCloud, BiPencilFill );


import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVueStyled)
//iconos
app.component('v-icon', OhVueIcon)
//ui components
app.component('Button', Button)
app.component('Password', Password)
app.component('Textarea', Textarea)
app.component('IconField', IconField)
app.component('InputIcon', InputIcon)
app.component('Avatar', Avatar)
app.component('FileUpload', FileUpload)


app.mount('#app')
