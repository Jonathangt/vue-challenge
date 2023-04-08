import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/shared/pages/HomePage.vue'
import AboutPage from '@/shared/pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutPage
      // component: () => import('../views/AboutView.vue')
    },

    //default
    { path: '/:pathMatch(.*)', redirect: () => ({ name: 'home' }) },
  ]
})

export default router
