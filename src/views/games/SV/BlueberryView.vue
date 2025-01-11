<template>
    <div class="blueberry-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="sv" :region="region" :dexId="33" spriteSet="other/home/" :filterCaughtIn="[31, 32, 312]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'BlueberryView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'blueberry',
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
