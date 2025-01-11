<template>
    <div class="crown-tundra-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="swsh" :region="region" :dexId="29" spriteSet="other/home/" :filterCaughtIn="[27, 28]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'CrownTundraView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'crown-tundra',
      navLinks: [
        { name: 'Galar', path: '/games/swsh/galar' },
        { name: 'IsleOfArmor', path: '/games/swsh/isle-of-armor' },
        { name: 'CrownTundra', path: '/games/swsh/crown-tundra' }
      ]
    }
  }
}
</script>
