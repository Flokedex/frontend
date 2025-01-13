<template>
  <div id="app">
    <router-view></router-view>
    <BottomBar v-if="showBottomBar" />
  </div>
</template>

<script>
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'App',
  components: {
    BottomBar
  },
  computed: {
    showBottomBar () {
      const routesWithBottomBar = ['/privacy-policy', '/disclaimer', '/', '/home']
      return routesWithBottomBar.includes(this.$route.path)
    }
  }
}
</script>
