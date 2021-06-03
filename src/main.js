import Vue from 'vue'
// 懒加载
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
// 全局组件库，不需要重复引用
import './components/globalComponent'
import http from './network/request/http'
// element-ui
import './plugins/elementUI'
import router from './router'
import store from './store'




Vue.use(VueLazyLoad)


Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')