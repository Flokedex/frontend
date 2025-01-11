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
        { name: 'Pokemon Home', path: '/games/pkmn-home', image: require('@/assets/navImgs/home.webp') },
        { name: 'Red, Blue and Yellow', path: '/games/rby/kanto', image: require('@/assets/navImgs/rby.webp') },
        { name: 'Gold, Silver and Crystal', path: '/games/gsc/johto', image: require('@/assets/navImgs/gsc.png') },
        { name: 'Ruby, Sapphire and Emerald', path: '/games/rse/hoenn', image: require('@/assets/navImgs/rse.png') },
        { name: 'FireRed and LeafGreen', path: '/games/frlg/kanto', image: require('@/assets/navImgs/frlg.png') },
        { name: 'Diamond and Pearl', path: '/games/dp/sinnoh', image: require('@/assets/navImgs/dp.jpg') },
        { name: 'Platinum', path: '/games/pt/sinnoh', image: require('@/assets/navImgs/pt.png') },
        { name: 'HeartGold and SoulSilver', path: '/games/hgss/johto', image: require('@/assets/navImgs/hgss.jpg') },
        { name: 'Black and White', path: '/games/bw/unova', image: require('@/assets/navImgs/bw.png') },
        { name: 'Black2 and White2', path: '/games/bw2/unova', image: require('@/assets/navImgs/bw2.png') },
        { name: 'X and Y', path: '/games/xy/kalos-central', image: require('@/assets/navImgs/xy.png') },
        { name: 'Omega Ruby and Alpha Sapphire', path: '/games/oras/hoenn', image: require('@/assets/navImgs/oras.png') },
        { name: 'Sun and Moon', path: '/games/sm/melemele', image: require('@/assets/navImgs/sm.png') },
        { name: 'Ultra Sun and Ultra Moon', path: '/games/usum/melemele', image: require('@/assets/navImgs/usum.png') },
        { name: 'Let\'s Go Pikachu and Let\'s Go Eevee', path: '/games/letsgo/kanto', image: require('@/assets/navImgs/letsgo.jpg') },
        { name: 'Sword and Shield', path: '/games/swsh/galar', image: require('@/assets/navImgs/swsh.jpg') },
        { name: 'Brilliant Diamond and Shining Pearl', path: '/games/bdsp/sinnoh', image: require('@/assets/navImgs/bdsp.jpg') },
        { name: 'Legends: Arceus', path: '/games/pla/hisui', image: require('@/assets/navImgs/pla.jpg') },
        { name: 'Scarlet and Violet', path: '/games/sv/paldea', image: require('@/assets/navImgs/sv.jpg') }
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
