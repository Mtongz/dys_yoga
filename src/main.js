import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui
import './plugins/elementUI'

// 懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

// 全局组件库，不需要重复引用
import './components/globalComponent';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
