<template>
    <div class="hoenn-updated-view">
        <BaseNav :links="navLinks" />
        <BaseDex game="oras" :region="region" :dexId="15" spriteSet="versions/generation-vi/omegaruby-alphasapphire/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'HoennGen6View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'hoenn-updated',
      navLinks: [
        { name: 'Hoenn', path: '/games/oras/hoenn' }
      ]
    }
  }
}
</script>
