import { createApp } from 'vue'
import App from './App.vue'

//Router
import router from '@/router'

//Styling
import '@/style/index.css'
import '@/style/app.css'

createApp(App)
.use(router)
.mount('#app')
