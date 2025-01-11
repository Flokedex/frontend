<template>
    <div class="base-dex">
      <div class="title">
        <h1 class="main-title">{{ formattedTitle }}</h1>
      </div>

      <div class="search-bar">
        <input type="text" v-model="searchQuery" placeholder="Search Pokémon by name..." />
      </div>

      <div class="loading-state" v-if="loading">Loading...</div>
      <div class="error-state" v-else-if="error">{{ error }}</div>
      <div v-else>
        <div class="action-buttons-container">
          <div class="action-buttons">
            <button class="styled-button" @click="markAllOnPageAsCaught">Caught 'em all</button>
            <button class="styled-button" @click="toggleHideCaught">{{ hideCaught ? 'Show Caught' : 'Hide Caught' }}</button>
          </div>
        </div>

        <div class="grid">
          <div
            v-for="pokemon in paginatedList"
            :key="pokemon.entry_id"
            :class="['pokemon-card', { caught: pokemon.isCaught, shiny: pokemon.isShiny }]"
          >
            <img class="pokemon-image" :src="getPokemonSprite(pokemon)" alt="Pokemon Image" @click="openPokemonLink(pokemon.species_id)" />
            <span class="pokemon-name">
              <h3>{{ getPokemonDisplayName(pokemon) }}</h3>
            </span>
            <div class="pokemon-card-actions">
              <button class="pokeball-button" @click="toggleCaught(pokemon)">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg" alt="Poké Ball Icon" />
              </button>
              <div v-if="game !== 'rby'">
              <button class="shiny-button" @click="toggleShiny(pokemon)">
                {{ pokemon.isShiny ? '💫' : '✨' }}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button class="pagination-prev" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
          Previous
        </button>
        <span class="pagination-info">Page {{ currentPage }} of {{ totalPages }}</span>
        <button class="pagination-next" @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
          Next
        </button>
      </div>

      <div class="jump-to-container">
        <label class="jump-to-label">
          Jump to page:
          <input class="jump-to-input" type="number" v-model.number="currentPage" @input="validatePageInput" @change="changePage(currentPage)" />
        </label>
      </div>
    </div>
  </template>

<script>
import dexApi from '@/services/dexApi'
import caughtApi from '@/services/caughtApi'
import { mapGetters } from 'vuex'

export default {
  props: {
    region: {
      type: String,
      required: true
    },
    game: {
      type: String,
      required: true
    },
    dexId: {
      type: Number,
      required: true
    },
    spriteSet: {
      type: String,
      required: true
    },
    filterCaughtIn: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      filters: { name: '', type: '' },
      pokemonList: [],
      searchQuery: '',
      hideCaught: false,
      currentPage: 1,
      pageSize: 30,
      totalEntries: 0,
      loading: true,
      error: null
    }
  },
  watch: {
    searchQuery () {
      this.currentPage = 1
    }
  },
  computed: {
    ...mapGetters(['getUser']),
    discordId () {
      return this.getUser.discord_id
    },
    formattedTitle () {
      if (this.region.includes('_nodex')) {
        return 'Unregistered'
      }
      return this.capitalizeWords(this.region.replace(/-/g, ' ')) + ' Pokédex'
    },
    filteredPokemon () {
      const query = this.searchQuery.toLowerCase().trim()

      // Exclude Pokémon with caught_in values in filterCaughtIn
      return this.pokemonList.filter(pokemon => {
        const shouldExclude = this.filterCaughtIn.length > 0 && this.filterCaughtIn.includes(pokemon.caught_in)
        return (
          !shouldExclude && // Exclude based on caught_in
            pokemon.name.toLowerCase().includes(query) &&
            (!this.hideCaught || !pokemon.isCaught) // Additional filters
        )
      })
    },
    paginatedList () {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.filteredPokemon.slice(startIndex, endIndex)
    },
    totalPages () {
      return Math.ceil(this.filteredPokemon.length / this.pageSize)
    }
  },
  methods: {
    markAllOnPageAsCaught () {
      this.paginatedList.forEach(pokemon => {
        pokemon.isCaught = true
      })
    },
    capitalizeWords (str) {
      return str.replace(/\b\w/g, char => char.toUpperCase())
    },
    toggleHideCaught () {
      this.hideCaught = !this.hideCaught
      this.currentPage = 1
    },
    async fetchData () {
      this.loading = true
      try {
        const filtersWithDexid = { ...this.filters, dexId: this.dexId }
        const response = await dexApi.getPokedex(this.game, this.region, filtersWithDexid)
        this.pokemonList = response.data.map(pokemon => ({
          ...pokemon,
          isCaught: false,
          isShiny: false
        }))
        this.totalEntries = this.pokemonList.length
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async fetchCaughtPokemon () {
      try {
        const caughtPokemon = await caughtApi.getCaughtStatus(
          this.discordId,
          this.game,
          this.caughtEndpoint,
          this.dexId
        )
        this.pokemonList.forEach(pokemon => {
          const caughtData = caughtPokemon.find(caught => caught.entry_id === pokemon.entry_id)
          if (caughtData) {
            pokemon.isCaught = true // Default to caught if data exists
            pokemon.isShiny = caughtData.is_shiny
            pokemon.caught_in = caughtData.caught_in // Store caught_in for filtering

            // Apply exclusion logic for specific views
            if (this.filterCaughtIn.length > 0 && this.filterCaughtIn.includes(caughtData.caught_in)) {
              pokemon.isCaught = false // Override to uncaught if excluded by filterCaughtIn
            }
          } else {
            pokemon.isCaught = false
            pokemon.isShiny = false
            pokemon.caught_in = null // Default caught_in if not found
          }
        })
      } catch (error) {
        console.error('Error fetching caught Pokémon:', error)
      }
    },
    getPokemonDisplayName (pokemon) {
      const name = pokemon.name
      if (name.includes('(Male)') || name.includes('(Default)') || name.includes('()')) {
        return pokemon.species_name
      }
      return name
    },
    getPokemonSprite (pokemon) {
      const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
      const spriteSet = this.spriteSet
      const fileExtension = spriteSet.includes('animated') ? 'gif' : 'png'

      const getSpriteUrl = (path) => `${baseUrl}${spriteSet}/${path}.${fileExtension}`

      // Handle shiny Pokémon
      if (pokemon.isShiny) {
        return getSpriteUrl(`shiny/${pokemon.pokemon_id}`)
      }

      // Edge case: Ursaluna
      if (pokemon.pokemon_id === 10272) {
        return getSpriteUrl(pokemon.pokemon_id)
      }

      // Edge case: Female Torchic
      if (pokemon.pokemon_id === 255 && pokemon.form_id_name === 'female') {
        return getSpriteUrl(pokemon.pokemon_id)
      }

      // Gender-specific sprite for female
      if (pokemon.gender_type === 'implicit' && pokemon.form_id_name === 'female') {
        return getSpriteUrl(`female/${pokemon.pokemon_id}`)
      }

      // Gender-specific sprite (explicit case)
      if (pokemon.gender_type === 'explicit' && pokemon.form_id_name === 'female') {
        return getSpriteUrl(pokemon.pokemon_id)
      }

      // Non-default form
      if (pokemon.species_id === pokemon.pokemon_id && !pokemon.form_is_pokemon_default) {
        return getSpriteUrl(`${pokemon.pokemon_id}-${pokemon.form_id_name}`)
      }

      // Default sprite fallback
      return getSpriteUrl(pokemon.pokemon_id)
    },
    async toggleCaught (pokemon) {
      try {
        await caughtApi.toggleCaughtStatus(
          pokemon.entry_id,
          this.discordId,
          pokemon.isCaught,
          pokemon.isShiny,
          this.game,
          this.dexId
        )
        pokemon.isCaught = !pokemon.isCaught
      } catch (error) {
        console.error(error)
      }
    },
    async toggleShiny (pokemon) {
      try {
        await caughtApi.toggleShinyStatus(
          pokemon.entry_id,
          this.discordId,
          !pokemon.isShiny,
          this.game
        )
        pokemon.isShiny = !pokemon.isShiny
      } catch (error) {
        console.error(error)
      }
    },
    openPokemonLink (speciesId) {
      const url = `https://pokemondb.net/pokedex/${speciesId}`
      window.open(url, '_blank')
    },
    changePage (page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    validatePageInput (event) {
      const value = event.target.value
      if (value < 1) {
        this.currentPage = 1
      } else if (value > this.totalPages) {
        this.currentPage = this.totalPages
      }
    }
  },
  created () {
    this.fetchData().then(() => {
      this.fetchCaughtPokemon()
    })
  }
}
</script>

  <style lang="scss" scoped>
  @import '@/assets/styles/_BaseDex.scss';
  </style>
