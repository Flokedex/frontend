<template>
    <div class="kalos-central-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="xy" :region="region" :dexId="12" spriteSet="versions/generation-vi/x-y/" :filterCaughtIn="[13, 14]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KalosCentralView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kalos-central',
      navLinks: [
        { name: 'Kalos Centr.', path: '/games/xy/kalos-central' },
        { name: 'Kalos Costal', path: '/games/xy/kalos-coastal' },
        { name: 'Kalos Mtn.', path: '/games/xy/kalos-mountain' }
      ]
    }
  }
}
</script>
