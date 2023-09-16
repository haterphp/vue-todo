import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    components: {
        TasksHeader: defineAsyncComponent(
            () => import('./header/index.vue')
        )
    }
})