import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fnResize from 'fn-resize'
import 'cssreset-init'
import { Dialog, Picker, TabBar } from '@nutui/nutui'
import yy from 'yy-util'

Dialog.install(Vue)
Picker.install(Vue)
TabBar.install(Vue)
fnResize()
Vue.config.productionTip = false
Vue.prototype.$yy = yy

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
