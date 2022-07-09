import Vue from 'vue';
import App from './App.vue';
import Order from '@/components/Order.vue';
import Sort from '@/components/Sort.vue';
import Index from '@/components/Index.vue';
import My from '@/components/My.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/Index' },
  { path: '/Order', component: Order },
  { path: '/Sort', component: Sort },
  { path: '/Index', component: Index },
  { path: '/My', component: My },
];

const router = new VueRouter({
  routes,
});
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
