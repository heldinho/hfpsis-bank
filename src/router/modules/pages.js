import Home from '../../views/Home.vue'
import About from '../../views/About.vue'
import Login from '../../views/Login.vue'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: () => {
    //   if (false) {
    //     return '/'
    //   } else {
    //     return '/login'
    //   }
    // },
    beforeEnter: (to, from, next) => {
      next(true)
    },
    children: []
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    // redirect: () => {
    //   if (false) {
    //     return '/about'
    //   } else {
    //     return '/login'
    //   }
    // },
    beforeEnter: (to, from, next) => {
      next(true)
    },
    children: []
  }
]
