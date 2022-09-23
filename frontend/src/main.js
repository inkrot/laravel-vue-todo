import {createApp} from 'vue'
import App from '@/App.vue'
import store from '@/store'
import FontAwesomeIcon from '@/fontawesome'
import '@/assets/css/main.css'

export const app = createApp(App)
    .component('icon', FontAwesomeIcon)
    .use(store)
    .mount('#app')
