import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import LandingView from '@/views/LandingView.vue'
import HomeView from '../views/HomeView.vue'

import JohtoGen2View from '@/views/games/GSC/JohtoGen2View.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingView
  },
  {
    path: '/home',
    name: 'home',
    meta: { requiresAuth: true },
    component: HomeView
  },
  {
    path: '/games/gsc/johto',
    name: 'johto-gen2',
    component: JohtoGen2View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated

  if (!store.state.user && to.meta.requiresAuth) {
    // Fetch user only if navigating to a protected route
    await store.dispatch('fetchUser')
  }

  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/') // Redirect unauthenticated users to landing
  } else if (!to.meta.requiresAuth && isAuthenticated && to.path === '/') {
    next('/home') // Redirect authenticated users from '/' to '/home'
  } else {
    next() // Allow navigation
  }
})

export default router
