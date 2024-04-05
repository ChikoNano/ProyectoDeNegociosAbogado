import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

createApp(App)
		.use(PrimeVue)
		.mount('#app')
