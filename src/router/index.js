import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由push重复点击解决方案
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const Home = () => import( /* webpackChunkName: "home" */ '@/views/home/Home')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  }
]
router.beforeEach((to, from, next) => {
  const name = sessionStorage.getItem("username");
  const token = sessionStorage.getItem("token");

  if (to.name === 'Login') {
    next();
  } else {
    if (token) {
      if (name) {
        next();
      } else {
        router.push("/login")
      }
    } else {
      this.$message.warning('请先登录');
      router.push("/login");
    }
  }
})


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router