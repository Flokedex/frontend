<template>
    <div class="sinnoh-updated-view">
        <BaseNav :links="navLinks" />
        <BaseDex game="bdsp" :region="region" :dexId="5" spriteSet="" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'SinnohUpdatedView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'sinnoh-updated',
      navLinks: [
        { name: 'Sinnoh', path: '/games/bdsp/sinnoh' }
      ]
    }
  }
}
</script>
