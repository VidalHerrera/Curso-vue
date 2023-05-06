import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import view1 from '../views/view1.vue'
import view2 from '../views/view2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: home },
    { path: '/view1', component: view1 },
    { path: '/view2', component: view2 }
  ]
})

export default router
