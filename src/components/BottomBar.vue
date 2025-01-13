<template>
    <div class="bottom-bar">
        <div class="bottom-nav">
            <router-link v-if="!isHome" to="/">Home</router-link>
            <router-link to="/privacy-policy">Privacy Policy</router-link>
            <router-link to="/disclaimer">Legal</router-link>
            <a href="https://github.com/Flokedex/frontend" target="_blank">Github</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'BottomBar',
  computed: {
    isHome () {
      return this.$route.path === '/' || this.$route.path === '/home'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_BottomBar.scss';
</style>
