import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


// 懒加载
import VueLazyLoad from 'vue-lazyload'
// 全局组件库，不需要重复引用
import './components/globalComponent'
// element-ui
import './plugins/elementUI'
// ui
import 'assets/css/reset.css'
import 'assets/css/normalize.css'
import 'assets/css/common.scss'
// import 'assets/css/element-reset.scss'
import 'font-awesome/css/font-awesome.min.css'
// swiper 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// apis
import http from './network/request/http'



Vue.use(VueLazyLoad)
Vue.use(VueAwesomeSwiper);


Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')