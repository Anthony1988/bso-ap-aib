import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
