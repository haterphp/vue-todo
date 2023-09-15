import { defineComponent } from "vue";


export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    }
})