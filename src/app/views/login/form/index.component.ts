import { defineAsyncComponent, defineComponent } from "vue";

import { FormStateManager } from "@app/ui/form/form-state";

interface IFormBody {
    email: string
    password: string
}

export default defineComponent({
    data() {
        return {
            manager: new FormStateManager<IFormBody>()
        }
    },
    components: {
        FormProvider: defineAsyncComponent(
            () => import('@app/ui/form/provider/index.vue')
        ),
        FormInput: defineAsyncComponent(
            () => import('@app/ui/form/components/input/index.vue')
        )
    },
    methods: {
        handleOnSubmit(e: Event) {
            e.preventDefault()
            this.manager.clearErrors()
            console.log('data', this.manager.getValues())
        }
    }
})