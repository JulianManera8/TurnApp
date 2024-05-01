import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import { supabase } from '@/supabase';

let currentUser;

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    //es la vista de login de inicio, aca entramos siempre
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    //es la vista de login de inicio, aca entramos siempre
    {
      path: '/noauth',
      name: 'noauth',
      component: () => import(/* webpackChunkName: "noauth" */ '../views/NoAuthView.vue'),
    },
    //es la vista de home post haberse logeado
    {
      path: '/homeView',
      name: 'homeview',
      component: () => import(/* webpackChunkName: "homeview" */ '../views/logeado/HomeView.vue'),
      meta: { requireAuth: true }
    },
    //es la vista de configuracion del perfil de cada uno
    {
      path: '/configuracion',
      name: 'configuracion',
      component: () => import(/* webpackChunkName: "configuracion" */ '../views/logeado/ConfiguracionView.vue'),
      meta: { requireAuth: true }
    },
    //vista de gestion de turnos, aca va el turno como lista o como calendario
    {
      path: '/gestionTurnos/lista',
      name: 'lista',
      component: () => import(/* webpackChunkName: "lista" */ '../views/logeado/GestionTurnos/GestionListaView.vue'),
      meta:  { requireAuth: true }
    },
    //vista de gestion de turnos, aca va el turno como calendario
    {
      path: '/gestionTurnos/calendario',
      name: 'calendario',
      component: () => import(/* webpackChunkName: "calendario" */ '../views/logeado/GestionTurnos/GestionCalendarioView.vue'),
      meta:  { requireAuth: true }
    },
    //vista de ver turorial de como se usa la app
    {
      path: '/tutorial',
      name: 'tutorial',
      component: () => import(/* webpackChunkName: "tutorial" */ '../views/logeado/TutorialView.vue'),
      meta:  { requireAuth: true }
    }
    
  ]
})

//VERIFICACIONES DE AUTH
async function getUser(next) {
  let currentUser = await supabase.auth.getSession()
  if(currentUser.data.session == null) {
    next('/noauth')
  } else {
    next();
  }
}


router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    console.log('requiere auth perro')
    getUser(next)
  } else {
    console.log('no requiere auth perro')
    next();
  }
});



export default router
