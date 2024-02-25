import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Anúncios',
      component: () => import('@/views/landingPage/Index'),
    },
    {
      path: '/auth',
      name: 'Login',
      component: () => import('@/views/landingPage/Auth')
    },
    {
      path: '/resgister',
      name: 'Criar conta',
      component: () => import('@/views/landingPage/CreateAccount')
    },
    {
      path: '/showroom',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        {
          name: 'Criar anúncio',
          path: 'pages/announcement',
          component: () => import('@/views/dashboard/pages/Announcement')
        },
        {
          name: 'Perfil do usuário',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
      ],
    },
  ],
})
