import {createApp} from 'vue'
import App from '@/App.vue'
import store from '@/store'
import FontAwesomeIcon from '@/fontawesome'
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'
import '@/assets/css/main.css'

const tooltipOptions = {
    name: 'VueCustomTooltip',
    color: '#fff',
    background: '#515151',
    borderRadius: 100,
    fontWeight: 400,
}

export const app = createApp(App)
    .component('icon', FontAwesomeIcon)
    .use(VueCustomTooltip, tooltipOptions)
    .use(store)
    .mount('#app')
