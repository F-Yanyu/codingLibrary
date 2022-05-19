import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import User from '@/components/content/user/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Main,
    redirect:'/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component:()=>import('@/views/home/Home')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/About')
      },
      {
        path: '/components-library',
        name: 'ComponentsLibrary',
        component: () => import('@/views/components-library/ComponentsLibrary')
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
