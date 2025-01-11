<template>
    <div class="isle-of-armor-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="swsh" :region="region" :dexId="28" spriteSet="other/home/" :filterCaughtIn="[27, 29]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'IsleOfArmorView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'isle-of-armor',
      navLinks: [
        { name: 'Galar', path: '/games/swsh/galar' },
        { name: 'IsleOfArmor', path: '/games/swsh/isle-of-armor' },
        { name: 'CrownTundra', path: '/games/swsh/crown-tundra' }
      ]
    }
  }
}
</script>
