import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './theme/index.less';
import './packages/Button/test/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
