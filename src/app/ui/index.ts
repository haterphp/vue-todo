import type { Plugin } from 'vue'

import { ButtonDirective } from './button'

export const UIPlugin = {
    install(app) {
        app.directive('button', ButtonDirective)
    }
} as Plugin