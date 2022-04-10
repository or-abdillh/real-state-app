import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue')
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
}) 
