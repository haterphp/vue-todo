import router from "@app/router";

import { defineComponent, type PropType } from "vue";

interface ITreeProps {
    title: string
    to?: string
    children?: ITreeProps[]
}

export type { ITreeProps }

export default defineComponent({
    name: 'TreeComponent',
    
    props: {
        content: {
            type: Object as PropType<ITreeProps>,
            required: true
        }
    },

    data() {
        return {
            isOpen: false
        }
    },

    computed: {
        title() {
            return this.$props.content.title
        },
        children() {
            return this.$props.content.children ?? []
        },
        link() {
            return this.$props.content.to
        }
    },

    methods: {
        handleTooggleCollapse(e: MouseEvent) {
            e.stopPropagation()
            this.isOpen = !this.isOpen
        },
        handleItemClick(e: MouseEvent) {
            if (this.link) {
                router.push(this.link)
                this.isOpen = true
            } else this.handleTooggleCollapse(e)
        }
    }
})