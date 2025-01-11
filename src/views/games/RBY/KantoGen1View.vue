<template>
    <div class="kanto-original-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="rby" :region="region" :dexId="2" spriteSet="versions/generation-i/yellow/transparent/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KantoGen1View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kanto-original',
      navLinks: [
        { name: 'Kanto', path: '/games/rby/kanto' }
      ]
    }
  }
}
</script>
