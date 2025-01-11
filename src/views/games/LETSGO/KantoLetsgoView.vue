<template>
    <div class="kanto-letsgo-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="letsgo" :region="region" :dexId="26" spriteSet="versions/generation-vii/icons/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KantoLetsgoView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kanto',
      navLinks: [
        { name: 'Kanto', path: '/games/letsgo/kanto' }
      ]
    }
  }
}
</script>
