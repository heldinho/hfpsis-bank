import { createRouter, createWebHistory } from 'vue-router'
import pages from './modules/pages'

const routes = [...pages]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
