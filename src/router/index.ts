import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/layout/index.vue'
import NProgress from 'nprogress'

import { otherRouter } from './page/index'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: layout,
    meta: { title: '首页', icon: 'el-icon-tickets' },
  }, {
    path: '/login',
    name: 'Login',
    hideMenu: true,
    component: () => import('@/views/login.vue')
  }, {
    // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: "/:pathMatch(.*)*",
    name: "404",
    hideMenu: true,
    component: () => import("@/views/404.vue")
  }
]

routes = routes.concat(otherRouter)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
