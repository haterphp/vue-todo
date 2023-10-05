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
        ComponentByVariant() {
            switch(this.variant) {
                case ViewToggleVariants.LIST: 
                    return 'TasksListBoard'
                
                case ViewToggleVariants.BOARD:
                default: 
                    return 'TasksContentBoard'
            }
        }
    },

    components: {
        TasksHeader: defineAsyncComponent(
            () => import('./header/index.vue')
        ),
        TasksContentBoard: defineAsyncComponent(
            () => import('./content/board/index.vue')
        ),
        TasksListBoard: defineAsyncComponent(
            () => import('./content/list/index.vue')
        )
    }
})