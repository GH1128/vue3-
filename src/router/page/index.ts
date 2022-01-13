import layout from '@/layout/index.vue'

export const otherRouter = [
  {
    path: '/demo',
    name: 'Demo',
    component: layout,
    redirect: '/demo/one',
    meta: { title: '案列', icon: 'el-icon-tickets' },
    children: [
      {
        path: 'one',
        name: 'DemoOne',
        component: () => import('@/views/demo/index.vue'),
        meta: { title: '案列1', }
      }, {
        path: 'two',
        name: 'DemoTwo',
        component: () => import('@/views/demo/index.vue'),
        meta: { title: '案列2', }
      },
    ]
  }, {
    path: '/test',
    name: 'test',
    component: layout,
    redirect: '/test',
    meta: {
      title: '测试',
      icon: 'el-icon-tickets'
    },
    children: [
      {
        path: 'one',
        component: () => import('@/views/demo/index.vue'),
        meta: {
          title: '测试1·'
        }
      },
      {
        path: 'two',
        component: () => import('@/views/demo/index.vue'),
        redirect: '/test/two/one',
        meta: {
          title: '测试2'
        },
        children: [
          {
            path: 'one',
            component: () => import('@/views/demo/index.vue'),
            meta: {
              title: '测试2-1'
            }
          },
          {
            path: 'two',
            component: () => import('@/views/demo/index.vue'),
            meta: {
              title: '测试2-2'
            }
          },
        ]
      },
    ]
  },
]