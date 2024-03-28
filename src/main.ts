import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import Main from '@/pages/Main.vue';

import App from './App.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [{ path: '/', component: Main }],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
