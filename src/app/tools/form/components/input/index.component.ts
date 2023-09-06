import { defineComponent} from "vue";
import { FormStateManager, type IFormStateManager } from "../../form-state";

export default defineComponent({
    props: {
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            required: true
        }
    },
    
    inject: ['formManager'],
    
    created() {
        this.updateInputValue('')
    },

    computed: {
        value() {
            const manager = this.formManager as IFormStateManager<Record<string, any>>
            return manager.getValue(this.name)
        }
    },

    methods: {
        updateInputValue(value: string) {
            const manager = this.formManager as IFormStateManager<Record<string, any>>
            manager.setValue(this.name, value)
        },
        handleOnInput(e: Event) {
            const value = (e.target as HTMLInputElement).value
            this.updateInputValue(value)
        }
    }
})