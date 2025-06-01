import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

import Cache from './javascript/cache';
export const cache = new Cache();

createApp(App).use(store).mount('#app');
