import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../layout/index.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  },
  {
    path: '/about1',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
