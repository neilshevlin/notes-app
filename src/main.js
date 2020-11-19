import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

import {routes} from './routes';
import {store} from './store/store';
Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
