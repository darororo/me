import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

const head = createHead()

createApp(App).use(head).mount('#app')
