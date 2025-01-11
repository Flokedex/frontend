<template>
    <div class="hisui-view">
        <BaseNav :links="navLinks" />
        <BaseDex game="pla" :region="region" :dexId="15" spriteSet="" />
    </div>
  </template>

<script>
import BaseDex from '@/components/BaseDex.vue'
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: 'HisuiView',
  components: {
    BaseNav,
    BaseDex
  },
  data () {
    return {
      region: 'hisui',
      navLinks: [
        { name: 'Hisui', path: '/games/pla/hisui' }
      ]
    }
  }
}
</script>
