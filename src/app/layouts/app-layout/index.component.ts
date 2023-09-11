import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    components: {
        AppDrawer: defineAsyncComponent(
            () => import('./components/drawer/index.vue')
        )
    }
})