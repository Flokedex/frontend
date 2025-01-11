<template>
    <div class="unova-updated-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="bw2" :region="region" :dexId="9" spriteSet="versions/generation-v/black-white/animated/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'UnovaUpdatedView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'unova-updated',
      navLinks: [
        { name: 'Unova', path: '/games/bw2/unova' }
      ]
    }
  }
}
</script>
