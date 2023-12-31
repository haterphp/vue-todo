import { RoutePaths } from "@app/router/route-paths";
import type { RouteRecordRaw } from "vue-router";

const LoginForm = () => import('./form/index.vue')

export default {
    path: RoutePaths.LOGIN,
    components: {
        form: LoginForm
    }
} as RouteRecordRaw