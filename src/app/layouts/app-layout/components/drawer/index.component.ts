import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    components: {
        ProjectDrawerChapter: defineAsyncComponent(
            () => import('./chapters/projects-chapter/index.vue')
        )
    }
})