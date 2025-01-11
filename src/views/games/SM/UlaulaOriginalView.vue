<template>
    <div class="ulaula-original-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="sm" :region="region" :dexId="19" spriteSet="versions/generation-vii/ultra-sun-ultra-moon/" :filterCaughtIn="[17, 16, 18, 20]" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'UlaulaOriginalView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'ulaula-original',
      navLinks: [
        { name: 'Melemele', path: '/games/sm/melemele' },
        { name: 'Akala', path: '/games/sm/akala' },
        { name: 'Ulaula', path: '/games/sm/ulaula' },
        { name: 'Poni', path: '/games/sm/poni' },
        { name: 'Alola', path: '/games/sm/alola' }
      ]
    }
  }
}
</script>
