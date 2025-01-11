<template>
    <div class="alola-updated-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="usum" :region="region" :dexId="21" spriteSet="versions/generation-vii/ultra-sun-ultra-moon/" :filterCaughtIn="[23, 22, 24, 25]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'AlolaUpdatedView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'alola-updated',
      navLinks: [
        { name: 'Melemele', path: '/games/usum/melemele' },
        { name: 'Akala', path: '/games/usum/akala' },
        { name: 'Ulaula', path: '/games/usum/ulaula' },
        { name: 'Poni', path: '/games/usum/poni' },
        { name: 'Alola', path: '/games/usum/alola' }
      ]
    }
  }
}
</script>
