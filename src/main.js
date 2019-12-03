import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fnResize from 'fn-resize'
import 'cssreset-init'  // css-reset 引入即可
import { Dialog, Picker } from '@nutui/nutui'  // 文档见 http://nutui.jd.com/#/intro
import yy from 'yy-util'  //使用方法见 https://github.com/sty-loading/yy-utils
// 设置rem
fnResize()

Dialog.install(Vue)
Picker.install(Vue)

Vue.config.productionTip = false
Vue.prototype.$yy = yy

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
