import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


// 懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
// 全局组件库，不需要重复引用
import './components/globalComponent'
// element-ui
import './plugins/elementUI'

// apis
import http from './network/request/http'



Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')