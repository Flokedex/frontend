<template>
    <div class="pkmn-home-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="home" :region="region" :dexId="1" spriteSet="other/home/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'PkmnHomeView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'pkmn-home',
      navLinks: [
        { name: 'Pokémon Home', path: '/games/pkmn-home' }
      ]
    }
  }
}
</script>
