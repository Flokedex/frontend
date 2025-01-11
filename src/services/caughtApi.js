import axios from 'axios'
import store from '@/store'

const backendUrl = process.env.NODE_ENV === 'production'
  ? process.env.VUE_APP_PROD_BACKEND_URL
  : process.env.VUE_APP_DEV_BACKEND_URL

const apiClient = axios.create({
  baseURL: `${backendUrl}/api/caught`, // Base URL for the API
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Include credentials with requests
})

apiClient.interceptors.request.use(config => {
  const token = store.getters['auth/token']
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

function getGetEndpoint (game, user) {
  return `/${game}/${user}`
}

function getPostEndpoint (game) {
  return `/${game}`
}

export default {
  async getCaughtStatus (game, user, dexid) {
    try {
      const response = await apiClient.get(getGetEndpoint(user, game), {
        params: { dexid }
      })
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  async toggleCaughtStatus (pokemonId, user, isCaught, isShiny, game, dexid) {
    try {
      const method = isCaught ? 'delete' : 'post'
      const url = isCaught
        ? `${getGetEndpoint(game, user)}/`
        : `${getPostEndpoint(game)}/`

      const data = isCaught
        ? { id: pokemonId }
        : { user: user.toLowerCase(), id: pokemonId, is_shiny: isShiny, caught_in: dexid }

      const response = await apiClient.request({
        url,
        method,
        data
      })
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  },

  async toggleShinyStatus (pokemonId, user, isShiny, game) {
    try {
      const url = getPostEndpoint(game)
      const data = {
        user: user.toLowerCase(),
        id: pokemonId,
        is_shiny: isShiny
      }
      const response = await apiClient.post(url, data)
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}
