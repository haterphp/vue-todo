import { defineAsyncComponent, defineComponent, computed } from "vue";

import { urlReplacer } from "@app/utils";

import { RoutePaths } from "@app/router/route-paths";

import type { ITreeProps } from "../../../tree/index.component";

export default defineComponent({

    data() {
        return {
            treeContent: {
                title: 'Project 1',
                type: 'folder',
                children: [
                    { 
                        title: "Project 1.1", 
                        type: 'tasks', 
                        isActive: computed(() => this.$route.path === urlReplacer(RoutePaths.TASK_VIEW, { id: '456' })),
                        action: () => this.$router.push(urlReplacer(RoutePaths.TASK_VIEW, { id: '456' }))
                    },
                    { 
                        title: "Project 1.2",
                        type: 'folder',
                        children: [ { title: "Project 1.2.1", type: 'document'} ]
                    },
                    { 
                        title: "Project 1.3",
                        type: 'document'
                    },
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