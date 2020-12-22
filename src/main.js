import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';
import './style/antd.less';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Msg} from './components/message'
import { isMobile } from './tool/isMobile'
import 'prismjs/themes/prism.css';  
Vue.prototype.$Msg = Msg;
Vue.prototype.$isMobile = isMobile;
Vue.use(Antd)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(transition => {
  //将元素滚动至顶部
  // console.log(transition)
  document.title = transition.name
  document.getElementById('content').scrollTop = 0;
  document.documentElement.scrollTop = 0;
  NProgress.done();
});