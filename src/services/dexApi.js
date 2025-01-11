import axios from 'axios'
import store from '@/store'

const backendUrl = process.env.NODE_ENV === 'production'
  ? process.env.VUE_APP_PROD_BACKEND_URL
  : process.env.VUE_APP_DEV_BACKEND_URL

const apiClient = axios.create({
  baseURL: `${backendUrl}/api/dex`, // Base URL for the API
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

function getEndpoint (game, region, queryString) {
  return `/${game}/${region}?excludeImplicit=true&${queryString}`
}

export default {
  getPokedex (game, region, filters = {}) {
    const queryString = new URLSearchParams(filters).toString()
    return apiClient.get(getEndpoint(game, region, queryString))
  }
}
