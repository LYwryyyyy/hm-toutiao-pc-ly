import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入local
import local from '@/utils/local'

// 登录路由
import Login from '@/views/login'

// 首页
import Home from '@/views/home'
// 首页
import Welcome from '@/views/welcome'
// 内容管理
import Contents from '@/views/contents'
// 素材页面
import Sources from '@/views/sources'
import Publish from '@/views/publish'
// 404
import notFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    },
    // 首页
    {
      path: '/',
      component: Home,
      children: [
        // 欢迎
        {
          path: '/',
          component: Welcome
        },
        {
          // 内容页面
          path: '/contents',
          component: Contents
        },
        {
          // 素材页面
          path: '/sources',
          component: Sources
        },
        {
          path: '/publish',
          component: Publish
        }
      ]
    },
    // 404页面
    {
      path: '*',
      component: notFound
    }
  ]
})

// 如果打开时不是登录页面就跳入登录页面
router.beforeEach((to, from, next) => {
  const user = local.getUser()
  if (to.path !== '/login' && !user) return next('/login')
  next()
})
export default router
