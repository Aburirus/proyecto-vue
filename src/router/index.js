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
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../modules/pokemon/components/Pokemons.vue')
  },
  {
    path: '/calcular',
    name: 'calcular',
    component: () => import('../modules/calcular/views/CalcularView.vue')
  },
  ]
})

export default router
