<template>
  <div class="home-view">
    <main>
      <p class="greeting"> Hello, {{ user.name }}</p>
      <button class="logout-button" @click="logout">Logout</button>
      <p class="description">Select a dex and start tracking.</p>
      <ul class="nav-links">
        <li v-if="links.length" :key="links[0].path" class="nav-item nav-item-full">
          <router-link :to="links[0].path" class="nav-link">
            <img :src="links[0].image" :alt="`${links[0].name} logo`" class="nav-image" />
            <span class="nav-text">{{ links[0].name }}</span>
          </router-link>
        </li>
        <li v-for="link in links.slice(1)" :key="link.path" class="nav-item">
          <router-link :to="link.path" class="nav-link">
            <img :src="link.image" :alt="`${link.name} logo`" class="nav-image" />
            <span class="nav-text">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      links: [
        { name: 'Pokemon Home', path: '/games/pkmn-home', image: require('@/assets/navImgs/HOME.png') },
        { name: 'Red, Blue and Yellow', path: '/games/rby/kanto', image: require('@/assets/navImgs/RBY.png') },
        { name: 'Gold, Silver and Crystal', path: '/games/gsc/johto', image: require('@/assets/navImgs/GSC.png') },
        { name: 'Ruby, Sapphire and Emerald', path: '/games/rse/hoenn', image: require('@/assets/navImgs/RSE.png') },
        { name: 'FireRed and LeafGreen', path: '/games/frlg/kanto', image: require('@/assets/navImgs/FRLG.png') },
        { name: 'Diamond and Pearl', path: '/games/dp/sinnoh', image: require('@/assets/navImgs/DP.png') },
        { name: 'Platinum', path: '/games/pt/sinnoh', image: require('@/assets/navImgs/Pt.png') },
        { name: 'HeartGold and SoulSilver', path: '/games/hgss/johto', image: require('@/assets/navImgs/HGSS.png') },
        { name: 'Black and White', path: '/games/bw/unova', image: require('@/assets/navImgs/BW.png') },
        { name: 'Black2 and White2', path: '/games/bw2/unova', image: require('@/assets/navImgs/BW2.png') },
        { name: 'X and Y', path: '/games/xy/kalos-central', image: require('@/assets/navImgs/XY.png') },
        { name: 'Omega Ruby and Alpha Sapphire', path: '/games/oras/hoenn', image: require('@/assets/navImgs/ORAS.png') },
        { name: 'Sun and Moon', path: '/games/sm/melemele', image: require('@/assets/navImgs/SM.png') },
        { name: 'Ultra Sun and Ultra Moon', path: '/games/usum/melemele', image: require('@/assets/navImgs/USUM.png') },
        { name: 'Let\'s Go Pikachu and Let\'s Go Eevee', path: '/games/letsgo/kanto', image: require('@/assets/navImgs/LETSGO.png') },
        { name: 'Sword and Shield', path: '/games/swsh/galar', image: require('@/assets/navImgs/SwSh.png') },
        { name: 'Brilliant Diamond and Shining Pearl', path: '/games/bdsp/sinnoh', image: require('@/assets/navImgs/BDSP.png') },
        { name: 'Legends: Arceus', path: '/games/pla/hisui', image: require('@/assets/navImgs/PLA.png') },
        { name: 'Scarlet and Violet', path: '/games/sv/paldea', image: require('@/assets/navImgs/SV.png') }
      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser || {}
    }
  },
  methods: {
    logout () {
      this.$store
        .dispatch('logout')
        .then(() => {
          this.$store.commit('clearUser') // Explicitly clear the user state
          this.$router.replace('/') // Redirect to the landing page
        })
        .catch((error) => {
          console.error('Logout failed:', error.message || error)
          alert('Logout failed. Please try again.')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_HomeView.scss';
</style>
