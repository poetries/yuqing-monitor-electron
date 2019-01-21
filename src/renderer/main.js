import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueHighcharts from 'vue-highcharts';
import VueSocketIO from 'vue-socket.io'

Vue.use(ElementUI);
Vue.use(VueHighcharts);

//引入socket.io配置连接
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://118.123.14.36:3000',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
