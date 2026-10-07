import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client'
import { router } from './router'
import { reveal } from './directives/reveal'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createHead())

// Глобальная директива scroll-reveal (v-reveal)
app.directive('reveal', reveal)

app.mount('#app')
