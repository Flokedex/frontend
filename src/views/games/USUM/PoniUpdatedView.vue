<template>
    <div class="poni-updated-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="usum" :region="region" :dexId="25" spriteSet="versions/generation-vii/ultra-sun-ultra-moon/" :filterCaughtIn="[23, 21, 24, 22]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'PoniUpdatedView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'poni-updated',
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
