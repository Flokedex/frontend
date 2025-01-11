<template>
    <div class="kalos-coastal-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="xy" :region="region" :dexId="13" spriteSet="versions/generation-vi/x-y/" :filterCaughtIn="[12, 14]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KalosCoastalView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kalos-coastal',
      navLinks: [
        { name: 'Kalos Centr.', path: '/games/xy/kalos-central' },
        { name: 'Kalos Costal', path: '/games/xy/kalos-coastal' },
        { name: 'Kalos Mtn.', path: '/games/xy/kalos-mountain' }
      ]
    }
  }
}
</script>
