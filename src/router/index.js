import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import LandingView from '@/views/LandingView.vue'
import HomeView from '../views/HomeView.vue'

import KantoGen1View from '@/views/games/RBY/KantoGen1View.vue'
import JohtoGen2View from '@/views/games/GSC/JohtoGen2View.vue'
import HoennGen3View from '@/views/games/RSE/HoennGen3View.vue'
import KantoGen3View from '@/views/games/FRLG/KantoGen3View.vue'
import SinnohGen4View from '@/views/games/DP/SinnohGen4View.vue'
import SinnohExtendedView from '@/views/games/PT/SinnohExtendedView.vue'
import JohtoGen4View from '@/views/games/HGSS/JohtoGen4View.vue'
import UnovaOriginalView from '@/views/games/BW/UnovaOriginalView.vue'
import UnovaUpdatedView from '@/views/games/BW2/UnovaUpdatedView.vue'
import KalosCentralView from '@/views/games/XY/KalosCentralView.vue'
import KalosCoastalView from '@/views/games/XY/KalosCoastalView.vue'
import KalosMountainView from '@/views/games/XY/KalosMountainView.vue'
import HoennGen6View from '@/views/games/ORAS/HoennGen6View.vue'
import MelemeleOriginalView from '@/views/games/SM/MelemeleOriginalView.vue'
import AkalaOriginalView from '@/views/games/SM/AkalaOriginalView.vue'
import UlaulaOriginalView from '@/views/games/SM/UlaulaOriginalView.vue'
import PoniOriginalView from '@/views/games/SM/PoniOriginalView.vue'
import AlolaOriginalView from '@/views/games/SM/AlolaOriginalView.vue'
import MelemeleUpdatedView from '@/views/games/USUM/MelemeleUpdatedView.vue'
import AkalaUpdatedView from '@/views/games/USUM/AkalaUpdatedView.vue'
import UlaulaUpdatedView from '@/views/games/USUM/UlaulaUpdatedView.vue'
import PoniUpdatedView from '@/views/games/USUM/PoniUpdatedView.vue'
import AlolaUpdatedView from '@/views/games/USUM/AlolaUpdatedView.vue'
import KantoLetsgoView from '@/views/games/LETSGO/KantoLetsgoView.vue'
import GalarView from '@/views/games/SWSH/GalarView.vue'
import IsleOfArmorView from '@/views/games/SWSH/IsleOfArmorView.vue'
import CrownTundraView from '@/views/games/SWSH/CrownTundraView.vue'
import SinnohUpdatedView from '@/views/games/BDSP/SinnohUpdatedView.vue'
import HisuiView from '@/views/games/PLA/HisuiView.vue'
import PaldeaView from '@/views/games/SV/PaldeaView.vue'
import KitakamiView from '@/views/games/SV/KitakamiView.vue'
import BlueberryView from '@/views/games/SV/BlueberryView.vue'
import PaldeaUnregView from '@/views/games/SV/PaldeaUnregView.vue'

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
    path: '/games/rby/kanto',
    name: 'kanto-gen1',
    component: KantoGen1View
  },
  {
    path: '/games/gsc/johto',
    name: 'johto-gen2',
    component: JohtoGen2View
  },
  {
    path: '/games/rse/hoenn',
    name: 'hoenn-gen3',
    component: HoennGen3View
  },
  {
    path: '/games/frlg/kanto',
    name: 'kanto-gen3',
    component: KantoGen3View
  },
  {
    path: '/games/dp/sinnoh',
    name: 'sinnoh-gen4',
    component: SinnohGen4View
  },
  {
    path: '/games/pt/sinnoh',
    name: 'sinnoh-extended',
    component: SinnohExtendedView
  },
  {
    path: '/games/hgss/johto',
    name: 'johto-gen4',
    component: JohtoGen4View
  },
  {
    path: '/games/bw/unova',
    name: 'unova-original',
    component: UnovaOriginalView
  },
  {
    path: '/games/bw2/unova',
    name: 'unova-updated',
    component: UnovaUpdatedView
  },
  {
    path: '/games/xy',
    name: 'xy',
    children: [
      { path: 'kalos-central', name: 'kalos-central', component: KalosCentralView },
      { path: 'kalos-coastal', name: 'kalos-coastal', component: KalosCoastalView },
      { path: 'kalos-mountain', name: 'kalos-mountain', component: KalosMountainView }
    ]
  },
  {
    path: '/games/oras/hoenn',
    name: 'hoenn-gen6',
    component: HoennGen6View
  },
  {
    path: '/games/sm',
    name: 'sm',
    children: [
      { path: 'melemele', name: 'melemele-original', component: MelemeleOriginalView },
      { path: 'akala', name: 'akala-original', component: AkalaOriginalView },
      { path: 'ulaula', name: 'ulaula-original', component: UlaulaOriginalView },
      { path: 'poni', name: 'poni-original', component: PoniOriginalView },
      { path: 'alola', name: 'alola-original', component: AlolaOriginalView }
    ]
  },
  {
    path: '/games/usum',
    name: 'usum',
    children: [
      { path: 'melemele', name: 'melemele-updated', component: MelemeleUpdatedView },
      { path: 'akala', name: 'akala-updated', component: AkalaUpdatedView },
      { path: 'ulaula', name: 'ulaula-updated', component: UlaulaUpdatedView },
      { path: 'poni', name: 'poni-updated', component: PoniUpdatedView },
      { path: 'alola', name: 'alola-updated', component: AlolaUpdatedView }
    ]
  },
  {
    path: '/games/letsgo/kanto',
    name: 'kanto-letsgo',
    component: KantoLetsgoView
  },
  {
    path: '/games/swsh',
    name: 'swsh',
    children: [
      { path: 'galar', name: 'galar', component: GalarView },
      { path: 'isle-of-armor', name: 'isle-of-armor', component: IsleOfArmorView },
      { path: 'crown-tundra', name: 'crown-tundra', component: CrownTundraView }
    ]
  },
  {
    path: '/games/bdsp/sinnoh',
    name: 'sinnoh-updated',
    component: SinnohUpdatedView
  },
  {
    path: '/games/pla/hisui',
    name: 'hisui',
    component: HisuiView
  },
  {
    path: '/games/sv',
    name: 'sv',
    children: [
      { path: 'paldea', name: 'paldea', component: PaldeaView },
      { path: 'kitakami', name: 'kitakami', component: KitakamiView },
      { path: 'blueberry', name: 'blueberry', component: BlueberryView },
      { path: 'unreg', name: 'paldea-unreg', component: PaldeaUnregView }
    ]
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
