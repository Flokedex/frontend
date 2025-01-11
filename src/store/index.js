import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null // Holds authenticated user data
  },
  getters: {
    isAuthenticated: (state) => !!state.user, // Check if the user is logged in
    getUser: (state) => state.user // Get the user details
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = null
    }
  },
  actions: {
    async fetchUser ({ commit }) {
      try {
        const backendUrl = process.env.NODE_ENV === 'production'
          ? process.env.VUE_APP_PROD_BACKEND_URL
          : process.env.VUE_APP_DEV_BACKEND_URL

        const response = await axios.get(
          `${backendUrl}/api/auth/discord/me`,
          { withCredentials: true }
        )
        commit('setUser', response.data)
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // User is not authenticated
          commit('clearUser') // Ensure user state is cleared
        } else {
          console.error('Failed to fetch user:', error.message || error)
        }
      }
    },
    logout ({ commit }) {
      const backendUrl = process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_PROD_BACKEND_URL
        : process.env.VUE_APP_DEV_BACKEND_URL

      return axios
        .post(
          `${backendUrl}/api/auth/discord/logout`,
          {},
          {
            withCredentials: true,
            timeout: 5000 // Set a timeout of 5 seconds
          }
        )
        .then(() => {
          commit('clearUser')
        })
        .catch((error) => {
          console.error('Logout request failed:', error.message || error)
          throw error
        })
    }
  },
  modules: {}
})
