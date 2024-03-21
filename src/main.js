import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import './assets/css/main.less'
import './assets/css/reset.less'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1,
  error: require('./assets/error.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1,
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
