<template>
    <div class="johto-gen4-view">
      <BaseNav :links="navLinks" />
      <BaseDex game="hgss" :region="region" :dexId="7" spriteSet="versions/generation-iv/heartgold-soulsilver/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'Johtogen4View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'johto-updated',
      navLinks: [
        { name: 'Johto', path: '/games/hgss/johto' }
      ]
    }
  }
}
</script>
