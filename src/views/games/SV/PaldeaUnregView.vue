<template>
    <div class="paldea-unreg-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="sv" :region="region" :dexId="312" spriteSet="other/home/" :filterCaughtIn="[31, 32, 33]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'PaldeaUnregView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'paldea-unregistered',
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
