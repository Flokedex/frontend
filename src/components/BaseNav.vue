<template>
    <nav class="navbar" role="navigation" aria-label="Main Navigation">
      <!-- Home Button -->
      <button
        class="nav-button home-button"
        @click="navigateToHome"
        aria-label="Home"
      >
        🏠
      </button>

      <!-- Dynamic Links or Fallback -->
      <div class="nav-items" :class="{ 'nav-collapsible': isMobileMenu }">
        <template v-if="links.length > 0">
        <a
          v-for="(link, index) in links"
          :key="index"
          class="nav-link"
          :href="link.path"
          :target="link.external ? '_blank' : '_self'"
          rel="noopener noreferrer"
        >
          {{ link.name }}
        </a>
      </template>
        <template v-else>
          <span class="nav-fallback">
            <p>{{ fallbackText }}</p>
          </span>
        </template>
      </div>

      <!-- Logout Button -->
      <button
        class="nav-button logout-button"
        @click="logout"
        aria-label="Logout"
      >
        Logout
      </button>
    </nav>
  </template>

<script>
export default {
  name: 'NavBar',
  props: {
    links: {
      type: Array,
      required: true,
      default: () => []
    },
    region: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
  },
  methods: {
    navigateToHome () {
      this.$router.push('/home')
    },
    capitalizeWords (str) {
      return str.replace(/\b\w/g, char => char.toUpperCase())
    },
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
  @import '@/assets/styles/_NavBar.scss';
  </style>
