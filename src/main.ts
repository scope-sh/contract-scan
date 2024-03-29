import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/pages/Home.vue';

import App from './App.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [{ path: '/', component: Home }],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
