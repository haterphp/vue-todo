import { defineComponent} from "vue";
import { FormStateManager, type IFormStateManager } from "../../form-state";

export default defineComponent({
    props: {
        label: String,
        feedback: String,
        placeholder: String,
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
    
    data() {
        return {
            isFocused: false
        }
    },

    created() {
        this.updateInputValue('')
    },

    computed: {
        value() {
            const manager = this.formManager as IFormStateManager<Record<string, any>>
            return manager.getValue(this.name)
        },
        isError() {
            const manager = this.formManager as IFormStateManager<Record<string, any>>
            return manager.hasError(this.name)
        },
        errorMessage() {
            const manager = this.formManager as IFormStateManager<Record<string, any>>
            return manager.getError(this.name)?.message ?? ''
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
        },
        handleOnFocus(direction: 'focus' | 'blur') {
            if (direction === 'focus') this.isFocused = true
            else this.isFocused = false
        }
    }
})