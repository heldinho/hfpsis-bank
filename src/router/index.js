import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: () => {
      if (false) {
        return '/'
      } else {
        return '/login'
      }
    },
    beforeEnter: (to, from, next) => {
      next(false)
    },
    children: []
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    redirect: () => {
      if (false) {
        return '/about'
      } else {
        return '/login'
      }
    },
    beforeEnter: (to, from, next) => {
      next(false)
    },
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
