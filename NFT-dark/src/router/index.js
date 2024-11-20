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
    {
      path: '/explore',
      name: 'explore',
      component: () => import('../views/ExploreView.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue'),
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    // with this, we can remember where the scroll was
    // when we go back to the previous page
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router
