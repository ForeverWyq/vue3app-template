import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import layoutMenu from './layoutMenu'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: layoutMenu
  },
  {
    path: '/:match(.*)*',
    name: '404',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
