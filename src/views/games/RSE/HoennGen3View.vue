<template>
    <div class="hoenn-original-view">
        <BaseNav :links="navLinks" />
        <BaseDex game="rse" :region="region" :dexId="4" spriteSet="versions/generation-iii/emerald/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'HoennGen1View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'hoenn-original',
      navLinks: [
        { name: 'Hoenn', path: '/games/rse/hoenn' }
      ]
    }
  }
}
</script>
