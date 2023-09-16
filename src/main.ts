
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/index.vue'
import router from './app/router'
import { UIPlugin } from '@app/ui'

import './fa-icons-register'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('fa-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(UIPlugin)

app.mount('#app')
