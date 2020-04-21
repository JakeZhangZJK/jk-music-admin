import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/playlist',
    component: Layout,
    children: [
      {
        path: 'list',
        // name: 'List',
        component: () => import('@/views/playlist/playlist'),
        meta: { title: '歌单管理', icon: 'nested' }
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/playlist/edit'),
        meta: { title: '编辑歌单', icon: 'table' },
        hidden: true
      }
    ]
  },
 
  {
    path: '/blog',
    component: Layout,
    children: [
      {
        path: 'list',
        component: () => import('@/views/blog/blog'),
        meta: { title: '博客管理', icon: 'form' }
      }
    ]
  },
  {
    path: '/swiper',
    component: Layout,
    children: [
      {
        path: 'list',
        component: () => import('@/views/swiper/swiper'),
        meta: { title: '广告管理', icon: 'example' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
