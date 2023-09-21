import { defineComponent, type PropType } from "vue";

type TreeItemType = 'folder' | 'tasks' | 'document' | 'storage'

interface ITreeProps {
    title: string
    type: TreeItemType
    isActive?: boolean
    children?: ITreeProps[]
    action?: () => void,
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
        const variants: Record<TreeItemType, string[]> = {
            folder: ['far', 'folder'],
            tasks: ['fas', 'table-columns'],
            document: ['far', 'file'],
            storage: ['far', 'hard-drive'],
        }

        return {
            isOpen: false,
            variants 
        }
    },

    computed: {
        title() {
            return this.$props.content.title
        },
        isActive() {
            return this.$props.content.isActive ?? false
        },
        children() {
            return this.$props.content.children ?? []
        },
        type() {
            return this.$props.content.type
        },
        action() {
            return this.$props.content.action
        },
        iconByType() {
            return this.variants[this.type] ?? []
        }
    },

    methods: {
        handleItemClick() {
           if (this.type === 'folder') this.isOpen = !this.isOpen
           if (this.action !== undefined) this.action()
        }
    }
})