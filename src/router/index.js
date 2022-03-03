import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import longitud from '../views/longitud.vue'
import almacenamiento from '../views/almacenamiento.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
panth: '/longitud',
name: 'longitud',
component: longitud
  },
  {
    panth: '/almacenamiento',
    name: 'almacenamiento',
    component: almacenamiento
  },


  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
