import { defineComponent } from "vue";

const VIEW_TOGGLE_INJECTION_KEY = 'variant'
const VIEW_TOGGLE_UPDATE_INJECTION_KEY = 'variant-update-value'

enum ViewToggleVariants {
    BOARD = 'board',
    LIST = 'list',
}

export { 
    ViewToggleVariants, 
    VIEW_TOGGLE_INJECTION_KEY,
    VIEW_TOGGLE_UPDATE_INJECTION_KEY
}

export default defineComponent({
    inject: {
        variant: { from: VIEW_TOGGLE_INJECTION_KEY },
        onChange: { from: VIEW_TOGGLE_UPDATE_INJECTION_KEY },
    },

    data() {
        return {
            Variants: ViewToggleVariants
        }
    },

    methods: {
        handleClick(variant: ViewToggleVariants) {
            const changeVariantValue = this.onChange as (v: ViewToggleVariants) => void
            changeVariantValue(variant)
        }
    }
})