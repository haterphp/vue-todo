import { RoutePaths } from "@app/router/route-paths";
import type { RouteRecordRaw } from "vue-router";

const TaskViewPage = () => import('./view/index.vue')

export default {
    path: RoutePaths.TASK_VIEW,
    component: TaskViewPage
} as RouteRecordRaw