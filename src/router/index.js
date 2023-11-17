import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ShoppingBasket from '@/views/ShoppingBasket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/basket',
      name: 'basket',
      component: ShoppingBasket
    }
  ]
})

export default router
