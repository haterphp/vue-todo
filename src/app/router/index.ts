import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import LoginPage from '@app/views/login'

const AuthLayout = () => import('@app/layouts/auth-layout/index.vue')

const routes: RouteRecordRaw[] = [
    { 
        path: '/', 
        component: AuthLayout,
        children: [LoginPage]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})