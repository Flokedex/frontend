<template>
    <div class="kitakami-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="sv" :region="region" :dexId="32" spriteSet="other/home/" :filterCaughtIn="[31, 33, 312]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KitakamiView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kitakami',
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
