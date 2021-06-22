import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由push重复点击解决方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/* webpackChunkName: "component.path" */
const Home = () => import('views/home/Home')

const Commodities = () => import('views/commodities/Commodities')
const CommoditiesDetail = () => import('views/commodities/detail/CommoditiesDetail')

const Cart = () => import('views/cart/Cart')
const CartCalculation = () => import('views/cart/components/CartCalculation')
const CalcSuccess = () => import('views/cart/CalcSuccess')

const Login = () => import('views/user/Login')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: false,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: false
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requireAuth: false,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: true
    },
  },
  {
    path: '/commodities',
    name: 'Commodities',
    component: Commodities,
    meta: {
      requireAuth: false,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: false
    },
  },
  {
    path: '/commoditiesDetail',
    name: 'CommoditiesDetail',
    component: CommoditiesDetail,
    meta: {
      requireAuth: false,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: true
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      requireAuth: true,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: true
    },
  },
  {
    path: '/cartCalculation',
    name: 'CartCalculation',
    component: CartCalculation,
    meta: {
      requireAuth: true,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: true
    },
  },
  {
    path: '/calcSuccess',
    name: 'CalcSuccess',
    component: CalcSuccess,
    meta: {
      requireAuth: true,
      keepAlive: false,
      isFooterHide: false,
      isHeaderHide: false,
      isBlack: true
    },
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (to.name === 'Login') {
      next()
    } else {
      if (token) {
        //访问服务器缓存数据，判断当前token是否失效
        // Vue.http.get("http:xxxx/Login/UserIsLogin?token=" + localStorage.getItem('token') + "&url=" + to.name, {
        //   withCredentials: true
        // }).then(response => response.json()).then(num => {
        //   // console.log('是否登录',num);
        //   if (num.code == 1001) {
        //     next();
        //   } else {
        //     alert('您的token已超时，请重新登录');
        //     next('/Login');
        //   }
        // })
        next();
      } else {
        next('/login')
      }
    }
  } else {
    next()
  }
  // if (to.name === 'Login') {
  //   next();
  // } else {
  //   if (token) {
  //     if (name) {
  //       next();
  //     } else {
  //       router.push("/login")
  //     }
  //   } else {
  //     this.$message.warning('请先登录');
  //     router.push("/login");
  //   }
  // }
})
export default router