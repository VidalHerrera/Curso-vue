import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import about from '../views/about.vue'
import info from '../views/info.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/home', component: home },
    { path: '/about', component: about },
    { path: '/info', component: info }
  ]
})

export default router
