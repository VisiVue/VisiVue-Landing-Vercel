import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion';
import App from './App.vue'
import PrimeVue from 'primevue/config'
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

// const app = createApp(App)
// app.mount('#app')

const app = createApp(App)
app.use(MotionPlugin)
app.use(PrimeVue, {ripple: true}).mount('#app')
