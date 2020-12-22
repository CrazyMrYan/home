import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/home/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/about')
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
