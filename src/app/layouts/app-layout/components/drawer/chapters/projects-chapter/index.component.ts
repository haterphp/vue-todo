import { defineAsyncComponent, defineComponent } from "vue";
import type { ITreeProps } from "../../../tree/index.component";

export default defineComponent({

    data() {
        return {
            treeContent: {
                title: 'Project 1',
                to: '/app/task/234',
                children: [
                    { title: "Project 1.1", to: '/app/task/567', },
                    { title: "Project 1.2", children: [ {title: "Project 1.2.1"} ] },
                    { title: "Project 1.3" },
                ]
            } as ITreeProps
        } 
    },

    components: {
        Chapter: defineAsyncComponent(
            () => import('../../../chapter/index.vue')
        ),
        Tree: defineAsyncComponent(
            () => import('../../../tree/index.vue')
        )
    }
})