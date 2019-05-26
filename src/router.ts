import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/icon',
      name: 'IconView',
      component: () => import(/* webpackChunkName: 'about' */ './views/icon-view.vue'),
    },
    {
      path: '/button',
      name: 'ButtonView',
      component: () => import('./views/button-view.vue'),
    },
  ],
});

export default router;
