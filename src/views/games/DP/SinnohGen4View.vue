<template>
    <div class="sinnoh-gen4-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="dp" :region="region" :dexId="5" spriteSet="versions/generation-iv/diamond-pearl/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'sinnohGen4View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'sinnoh-original',
      navLinks: [
        { name: 'Sinnoh', path: '/games/dp/sinnoh' }
      ]
    }
  }
}
</script>
