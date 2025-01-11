<template>
    <div class="paldea-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="sv" :region="region" :dexId="31" spriteSet="other/home/" :filterCaughtIn="[32, 33, 312]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'PaldeaView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'paldea',
      navLinks: [
        { name: 'Paldea', path: '/games/sv/paldea' },
        { name: 'Kitakami', path: '/games/sv/kitakami' },
        { name: 'Bluberry', path: '/games/sv/blueberry' },
        { name: 'PaldeaUnreg', path: '/games/sv/unreg' }
      ]
    }
  }
}
</script>
