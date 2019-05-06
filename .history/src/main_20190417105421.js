import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './assets/css/main.less'
import './assets/css/reset.less'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (store.state.authInfo || to.path === '/login') {
//     next()
// 	} else {
// 		next({path: '/login'})
// 	}
// })

// if (window) {
//   // 页面关闭时清除登录信息
//   let beforeUnloadTimestamp = 0
//   let isIE = false
//   let isClose = false

//   window.addEventListener('beforeunload', () => {
//     beforeUnloadTimestamp = new Date().getTime();
//   })

//   window.addEventListener('unload', () => {
//     beforeUnloadTimestamp = beforeUnloadTimestamp || 0
//     if (isIE) {
//       if (new Date().getTime() - beforeUnloadTimestamp > 500) {
//         isClose = true
//       }
//     } else {
//       if (new Date().getTime() - beforeUnloadTimestamp < 5) {
//         isClose = true
//       }
//     }
//     if (isClose) {
//       store.commit('clearUserInfo')
//     }
//   })
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
