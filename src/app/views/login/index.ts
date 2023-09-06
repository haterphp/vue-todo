import { RoutePaths } from "@app/router/route-paths";

const LoginForm = () => import('./form/index.vue')

/** @type {import('vue-router').RouteRecordRaw} */
export default {
    path: RoutePaths.LOGIN,
    components: {
        form: LoginForm
    }
}