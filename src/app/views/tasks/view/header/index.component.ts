import { VIEW_TOGGLE_INJECTION_KEY, VIEW_TOGGLE_UPDATE_INJECTION_KEY, ViewToggleVariants } from "@app/tools/view-toggle/index.component";
import { computed, defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            title: this.$route.params.id,
            variant: ViewToggleVariants.BOARD
        }
    },

    provide() {
        return {
            [VIEW_TOGGLE_INJECTION_KEY]: computed(() => this.variant),
            [VIEW_TOGGLE_UPDATE_INJECTION_KEY]: (v: ViewToggleVariants) => this.variant = v
        }
    },

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