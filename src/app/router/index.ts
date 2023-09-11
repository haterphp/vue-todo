import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import LoginPage from '@app/views/login'
import TasksModule from '@app/views/tasks'

const AuthLayout = () => import('@app/layouts/auth-layout/index.vue')
const AppLayout = () => import('@app/layouts/app-layout/index.vue')

const routes: RouteRecordRaw[] = [
    { 
        path: '/', 
        component: AuthLayout,
        children: [LoginPage]
    },
    {
        path: '/app',
        component: AppLayout,
        children: [TasksModule]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})