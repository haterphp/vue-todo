
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/index.vue'
import router from './app/router'
import { UIPlugin } from '@app/ui'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(UIPlugin)

app.mount('#app')
