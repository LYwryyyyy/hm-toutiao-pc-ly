import VueRouter from 'vue-router'
import Vue from 'vue'

// 登录路由
import Login from '@/views/login'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
