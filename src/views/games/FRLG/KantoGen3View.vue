<template>
    <div class="kanto-gen3-view">
        <BaseNav :links="navLinks" />
      <BaseDex game="frlg" :region="region" :dexId="2" spriteSet="versions/generation-iii/firered-leafgreen/" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'KantoGen3View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'kanto-updated',
      navLinks: [
        { name: 'Kanto', path: '/games/frlg/kanto' }
      ]
    }
  }
}
</script>
