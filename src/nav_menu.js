import { createApp } from 'vue'
import NavMenu from './components/NavMenu.vue'
import router from './router';

createApp(NavMenu).use(router).mount('#nav_bar')