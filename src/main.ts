import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import Contract from '@/pages/Contract.vue';
import Home from '@/pages/Home.vue';

import App from './App.vue';

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: Home },
    { path: '/contract/:address', name: 'contract', component: Contract },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');

export { routerHistory, router };
