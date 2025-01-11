<template>
    <div class="galar-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="swsh" :region="region" :dexId="27" spriteSet="other/home/" :filterCaughtIn="[28, 29]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'GalarView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'galar',
      navLinks: [
        { name: 'Galar', path: '/games/swsh/galar' },
        { name: 'IsleOfArmor', path: '/games/swsh/isle-of-armor' },
        { name: 'CrownTundra', path: '/games/swsh/crown-tundra' }
      ]
    }
  }
}
</script>
