import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'amfe-flexible/index.js'
import './assets/styles/index.scss'

import './permission'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
