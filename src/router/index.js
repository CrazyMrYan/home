import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/about/index.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import( '../views/article')
  },
  {
    path: '/',
    name: 'home',
    redirect:to=>{
      return '/home'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import( '../views/404')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
