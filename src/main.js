import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/_globals.scss'

// Import the global methods plugin
import globalMethods from './globals/authGlobals'

const app = createApp(App)

// Use the global methods plugin
app.use(globalMethods)

app.use(store).use(router).mount('#app')
