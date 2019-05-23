import Vue from 'vue';
import Router from 'vue-router';
import Icon from './views/Icon/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: 'icon',
      component: Icon,
    },
  ],
});
