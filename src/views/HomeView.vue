<template>
  <div class="home-view">
    <main>
      <p class="greeting"> Hello, {{ user.name }} ({{ user.discord_id }})</p>
      <p class="description">Select a dex and start tracking.</p>
      <div class="nav-links">
        <ul>
          <li v-for="link in links" :key="link.path" class="nav-item">
            <router-link :to="link.path" class="nav-link">
              <img :src="link.image" :alt="`${link.name} logo`" class="nav-image" />
              <span class="nav-text">{{ link.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      links: [
        { name: 'Gold, Silver and Crystal', path: '/games/gsc/johto', image: require('@/assets/navImgs/gsc.png') }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser || {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_HomeView.scss';
</style>
