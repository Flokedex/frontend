<template>
  <div class="johto-gen2-view">
    <BaseNav :links="navLinks" />
    <BaseDex game="gsc" :region="region" :dexId="3" spriteSet="versions/generation-ii/crystal/transparent/" />
  </div>
</template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'JohtoGen2View',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'johto-original',
      navLinks: [
        { name: 'Johto', path: '/games/gsc/johto' }
      ]
    }
  }
}
</script>
