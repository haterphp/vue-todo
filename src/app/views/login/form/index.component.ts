import { defineAsyncComponent, defineComponent } from "vue";

import { FormStateManager } from "@app/tools/form/form-state";

export default defineComponent({
    data() {
        return {
            manager: new FormStateManager()
        }
    },
    components: {
        FormProvider: defineAsyncComponent(
            () => import('@app/tools/form/provider/index.vue')
        ),
        FormInput: defineAsyncComponent(
            () => import('@app/tools/form/components/input/index.vue')
        )
    },
    methods: {
        handleOnSubmit(e: Event) {
            e.preventDefault()
            console.log('data', this.manager.getValues())
        }
    }
})