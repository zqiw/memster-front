// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/plugins/router';
import '@/plugins/element-ui';

Vue.config.productionTip = false;

const $mount: HTMLElement | null = document.getElementById('app');
if ($mount) {
  new Vue({
    router,
    render: (h) => h(App)
  }).$mount($mount);
}
