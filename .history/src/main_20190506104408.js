import Vue from 'vue'
import App from './App.vue'

import './assets/css/main.less'
import './assets/css/reset.less'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
