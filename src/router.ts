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
      component: () => import(/* webpackChunkName: 'about' */ './views/icon.view.vue'),
    },
    {
      path: '/grid',
      name: 'GridView',
      component: () => import(/* webpackChunkName: 'about' */ './views/grid.view.vue'),
    },
  ],
});

export default router;
