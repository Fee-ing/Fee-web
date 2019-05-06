import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.less'
import './assets/css/reset.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
