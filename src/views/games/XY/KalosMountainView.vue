<template>
    <div class="kalos-mountain-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="xy" :region="region" :dexId="14" spriteSet="versions/generation-vi/x-y/" :filterCaughtIn="[12, 13]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KalosMountainView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kalos-mountain',
      navLinks: [
        { name: 'Kalos Centr.', path: '/games/xy/kalos-central' },
        { name: 'Kalos Costal', path: '/games/xy/kalos-coastal' },
        { name: 'Kalos Mtn.', path: '/games/xy/kalos-mountain' }
      ]
    }
  }
}
</script>
