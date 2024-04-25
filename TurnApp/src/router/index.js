import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/homeView',
      name: 'homeview',
      component: () => import(/* webpackChunkName: "homeview" */ '../views/logeado/HomeView.vue')    }
  ]
})

export default router
