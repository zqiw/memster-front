import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/pages/Login.vue';
import {Main} from 'element-ui';
import MainPage from '@/pages/MainPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/main',
      name: 'Main',
      component: MainPage
    }
  ]
});
