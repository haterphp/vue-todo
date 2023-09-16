import { defineAsyncComponent, defineComponent } from "vue";
import type { ITreeProps } from "../../../tree/index.component";
import { urlReplacer } from "@app/utils";
import { RoutePaths } from "@app/router/route-paths";

export default defineComponent({

    data() {
        return {
            treeContent: {
                title: 'Project 1',
                to: urlReplacer(RoutePaths.TASK_VIEW, { id: 'project-1' }),
                children: [
                    { title: "Project 1.1", to: urlReplacer(RoutePaths.TASK_VIEW, { id: 'project-1_1' }), },
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