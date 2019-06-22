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
      component: () => import('./views/icon.view.vue'),
    },
    {
      path: '/grid',
      name: 'GridView',
      component: () => import('./views/grid.view.vue'),
    },
    {
      path: '/button',
      name: 'ButtonView',
      component: () => import('./views/button.view.vue'),
    },
    {
      path: '/input',
      name: 'InputView',
      component: () => import('./views/input.view.vue'),
    },
    {
      path: '/switch',
      name: 'SwitchView',
      component: () => import('./views/switch.view.vue'),
    },
    {
      path: '/notice',
      name: 'NoticeView',
      component: () => import('./views/notice.view.vue'),
    }
  ],
});

export default router;
