import './style.css'
import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'

import App from './App.vue'
const head = createHead()

createApp(App).use(head).mount('#app')
