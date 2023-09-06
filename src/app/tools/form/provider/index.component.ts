import { defineComponent, type PropType } from "vue";
import type { IFormStateManager } from "../form-state";

export default defineComponent({
    props: {
        stateManager: {
            type: Object as PropType<IFormStateManager<Record<string, any>>>,
            required: true
        }
    },
    provide() {
        return {
            formManager: this.$props.stateManager
        }
    }
})