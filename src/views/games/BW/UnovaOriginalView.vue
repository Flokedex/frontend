<template>
    <div class="unova-original-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="bw" :region="region" :dexId="8" spriteSet="versions/generation-v/black-white/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'UnovaOriginalView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'unova-original',
      navLinks: [
        { name: 'Unova', path: '/games/bw/unova' }
      ]
    }
  }
}
</script>
