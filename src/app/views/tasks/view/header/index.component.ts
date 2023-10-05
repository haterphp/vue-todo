import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    computed: {
        prefix() {
            return 'Доска'
        }
    },
    
    components: {
        ViewToggle: defineAsyncComponent(
            () => import('@app/tools/view-toggle/index.vue')
        ),
        SearchCompnent: defineAsyncComponent(
            () => import('@app/tools/search/index.vue')
        ),
    }
})