import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', //Ruta del navegador
    name: 'Inicio', // nombre de la ventana
    component: Home //Componente que se importa
  },
  {
    path: '/contacto',
    name: 'Contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
  {
    path: '/como-adoptar-un-animal',
    name: 'como-adoptar-un-animal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Adoptar.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Servicios.vue')
  },
  {
    path: '/donaciones',
    name: 'Donaciones',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Donaciones.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
