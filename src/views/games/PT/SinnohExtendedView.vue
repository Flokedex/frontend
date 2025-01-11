<template>
    <div class="sinnoh-gen4-extended-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="pt" :region="region" :dexId="6" spriteSet="versions/generation-iv/platinum/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'sinnohGen4ExtendedView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'sinnoh-extended',
      navLinks: [
        { name: 'SinnohExtended', path: '/games/pt/sinnoh' }
      ]
    }
  }
}
</script>
