import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   /* {
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
     {
    path: '/contador',
    name: 'contador',
    component: () => import('../modules/contador/components/Contador.vue')
  },
  {
    path: '/lista',
    name: 'lista',
    component: () => import('../modules/listaTareas/components/ListaTareas.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('../modules/registro/views/RegistroView.vue')
  }
  ]
})

export default router
