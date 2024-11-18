import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/creators',
      name: 'creators',
      // route level code-splitting
      // this generates a separate chunk (Creators.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreatorsView.vue'),
    },
  ],
})

export default router
