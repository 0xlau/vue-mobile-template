export default [
    {
        name: 'msg',
        path: '/msg',
        component: () => import('@/views/msg/index.vue'),
        meta: {
            title: '消息',
            icon: 'chat-o'
        }
    },
    {
        name: 'work',
        path: '/work',
        component: () => import('@/views/work/index.vue'),
        meta: {
            title: '工作台',
            icon: 'apps-o',
            // isNavBar: false
        }
    },
    {
        name: 'permission',
        path: '/permission',
        component: () => import('@/views/permission/index.vue'),
        meta: {
            title: '权限演示',
            icon: 'browsing-history-o',
            // isNavBar: false
        }
    },
    {
        name: 'my',
        path: '/my',
        component: () => import('@/views/my/index.vue'),
        meta: {
            title: '我的',
            icon: 'contact'
        }
    }
]