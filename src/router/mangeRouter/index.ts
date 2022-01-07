
import Layout from '@/layout/index.vue'

const route: any = [
  {
    path: '/',
    component: Layout,
    name: 'dashboard',
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: 'el-icon-house'
    },
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: '首页',
        icon: 'el-icon-house',
        hideClose: true
      }
    }]
  },
]

export default route