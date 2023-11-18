import type { RouteRecordRaw } from 'vue-router'

const menu: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'demo页面', icon: 'user' }
  }
]

export default menu
