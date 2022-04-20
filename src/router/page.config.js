export default [
    {
        name: 'profile',
        path: '/my/profile',
        component: () => import('../views/my/profile.vue'),
        meta: {
            title: '个人信息',
            // isNavBar: true
        }
    }
]